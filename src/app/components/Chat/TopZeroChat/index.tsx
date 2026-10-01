"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_MESSAGE_LENGTH = 1000;
const WHATSAPP_LINK = "https://wa.me/2349057778626";

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm TopZero — I can answer questions about our services, pricing process, and current offer. How can I help?",
};

// Gemini's replies come back as markdown (bold, bullet lists, links).
// Render them properly instead of showing literal "**"/"-" characters.
// Kept deliberately compact/tight to fit the small chat bubble.
const MarkdownMessage = ({ content }: { content: string }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
      strong: ({ children }) => (
        <strong className="font-semibold">{children}</strong>
      ),
      ul: ({ children }) => (
        <ul className="list-disc pl-4 mb-2 last:mb-0 space-y-1">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal pl-4 mb-2 last:mb-0 space-y-1">{children}</ol>
      ),
      li: ({ children }) => <li>{children}</li>,
      a: ({ href, children }) => (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          {children}
        </a>
      ),
    }}
  >
    {content}
  </ReactMarkdown>
);

const TopZeroChat: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading, open]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      setError(`Please keep messages under ${MAX_MESSAGE_LENGTH} characters.`);
      return;
    }

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: nextMessages.slice(0, -1),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(
          data?.error ||
            "Something went wrong. Please try again, or contact us on WhatsApp."
        );
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setError(
        "Couldn't reach the assistant. Please check your connection, or contact us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[999]">
      {open && (
        <div className="mb-4 w-[min(22rem,calc(100vw-4rem))] h-[28rem] bg-white dark:bg-darklight rounded-2xl shadow-2xl border border-Snowy-sky dark:border-darkborder flex flex-col overflow-hidden">
          <div className="bg-primary px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon icon="solar:chat-round-dots-bold" width="18" height="18" className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">TopZero</p>
                <p className="text-white/70 text-xs leading-tight">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white"
            >
              <Icon icon="solar:close-circle-linear" width="22" height="22" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === "user"
                      ? "bg-primary text-white"
                      : "bg-grey dark:bg-darkmode text-black dark:text-white"
                    }`}
                >
                  {m.role === "assistant" ? (
                    <MarkdownMessage content={m.content} />
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-grey dark:bg-darkmode rounded-lg px-3 py-2 text-sm text-black/50 dark:text-white/50">
                  Typing...
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-sm rounded-lg px-3 py-2">
                {error}{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  Chat on WhatsApp
                </a>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-Snowy-sky dark:border-darkborder shrink-0">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={MAX_MESSAGE_LENGTH}
                rows={1}
                placeholder="Ask about our services..."
                aria-label="Message TopZero AI assistant"
                className="flex-1 resize-none text-sm px-3 py-2 rounded-lg border border-border dark:border-darkborder dark:bg-transparent dark:text-white focus:outline-0 focus:border-primary"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="bg-primary text-white rounded-lg p-2.5 disabled:opacity-40 hover:bg-secondary duration-300 shrink-0"
              >
                <Icon icon="solar:plain-3-bold" width="20" height="20" />
              </button>
            </div>
            <p className="text-xs text-black/40 dark:text-white/40 mt-2">
              Need a human?{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close TopZero AI assistant" : "Open TopZero AI assistant"}
        className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-secondary duration-300"
      >
        <Icon
          icon={open ? "solar:close-circle-linear" : "solar:chat-round-dots-bold"}
          width="26"
          height="26"
        />
      </button>
    </div>
  );
};

export default TopZeroChat;