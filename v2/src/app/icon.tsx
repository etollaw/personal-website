import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Browser tab icon: "ET" monogram in the site's accent color
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0f",
          borderRadius: 14,
          color: "#00e5bf",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        ET
      </div>
    ),
    size
  );
}
