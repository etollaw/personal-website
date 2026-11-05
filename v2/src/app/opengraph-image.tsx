import { ImageResponse } from "next/og";

export const alt = "Eldad Tolla — CS & Math @ Columbia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview shown when the site is shared (LinkedIn, iMessage, Slack, etc.)
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(0,229,191,0.18), transparent 45%), radial-gradient(circle at 10% 90%, rgba(168,85,247,0.12), transparent 40%)",
          color: "#f0f0f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#00e5bf",
          }}
        >
          CS & Math @ Columbia University
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          Eldad Tolla
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#a0a0ac", marginTop: 24, maxWidth: 900 }}>
          AI software engineer · LLM systems, RAG, and reinforcement learning
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#00e5bf", marginTop: 56 }}>
          eldadtolla.vercel.app
        </div>
      </div>
    ),
    size
  );
}
