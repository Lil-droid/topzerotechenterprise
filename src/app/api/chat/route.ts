import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/ai/systemPrompt";

// GEMINI_API_KEY is read here, server-side, and never sent to the
// browser. The client only ever talks to this route, never to Gemini
// directly (see architecture note in Section 7 of the project brief).
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_TURNS = 8;
const REQUEST_TIMEOUT_MS = 15000;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

// --- Minimal in-memory rate limiting -----------------------------------
// Deliberately simple per Section 21 (avoid unnecessary backend
// infrastructure): caps how many chat requests a single IP can make per
// minute. This resets whenever the server restarts and is per-instance
// only (not shared across multiple server instances) — sufficient as a
// basic abuse guard for now, not a substitute for a real rate limiter
// if this is ever deployed behind multiple instances at scale.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 15;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

// --- Input validation ----------------------------------------------------
function sanitizeHistory(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter(
      (item): item is ChatMessage =>
        item &&
        typeof item === "object" &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string"
    )
    .slice(-MAX_HISTORY_TURNS)
    .map((item) => ({
      role: item.role,
      content: item.content.slice(0, MAX_MESSAGE_LENGTH),
    }));
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            "You're sending messages a little too quickly. Please wait a moment and try again, or reach out on WhatsApp.",
        },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const { message, history } = (body as Record<string, unknown>) || {};

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message is too long (max ${MAX_MESSAGE_LENGTH} characters).` },
        { status: 400 }
      );
    }

    const safeHistory = sanitizeHistory(history);
    const safeMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not configured.");
      return NextResponse.json(
        {
          error:
            "The AI assistant isn't available right now. Please contact TopZero on WhatsApp for help.",
        },
        { status: 503 }
      );
    }

    const systemPrompt = await buildSystemPrompt();

    const contents = [
      ...safeHistory.map((turn) => ({
        role: turn.role === "assistant" ? "model" : "user",
        parts: [{ text: turn.content }],
      })),
      { role: "user", parts: [{ text: safeMessage }] },
    ];

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    let geminiResponse: Response;
    try {
      geminiResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: systemPrompt }] },
            contents,
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 512,
            },
          }),
          signal: controller.signal,
        }
      );
    } catch (err) {
      clearTimeout(timeout);
      console.error("Gemini request failed:", err);
      return NextResponse.json(
        {
          error:
            "Sorry, something went wrong reaching the AI assistant. Please try again, or contact TopZero on WhatsApp.",
        },
        { status: 502 }
      );
    }
    clearTimeout(timeout);

    if (!geminiResponse.ok) {
      const errorBody = await geminiResponse.text().catch(() => "");
      console.error("Gemini API error:", geminiResponse.status, errorBody);
      return NextResponse.json(
        {
          error:
            "Sorry, the AI assistant couldn't respond just now. Please try again, or contact TopZero on WhatsApp.",
        },
        { status: 502 }
      );
    }

    const data = await geminiResponse.json();
    const reply: string | undefined =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.error("Unexpected Gemini response shape:", JSON.stringify(data));
      return NextResponse.json(
        {
          error:
            "Sorry, I couldn't generate a response. Please try again, or contact TopZero on WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Unexpected /api/chat error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}