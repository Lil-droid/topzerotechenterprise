import { NextResponse } from "next/server";
import { getPromotionConfig, isPromotionActive } from "@/lib/promotion";

// Read-only for now — this simply reflects the single source of truth
// in src/lib/promotion.ts. A future admin system (Phase 13) would add
// an authenticated PATCH/POST here rather than duplicating this data
// anywhere else.
export async function GET() {
  const config = await getPromotionConfig();
  return NextResponse.json({
    ...config,
    active: isPromotionActive(config),
  });
}