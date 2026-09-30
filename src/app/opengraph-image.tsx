import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TopZero — Digital Solutions for Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              border: "6px solid #34D399",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "5px solid white",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 800, color: "white" }}>
            TopZero
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#ffffffcc" }}>
          Digital Solutions for Businesses
        </div>
      </div>
    ),
    { ...size }
  );
}