import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "20%", // Rounded square looks modern
        border: "2px solid #333",
      }}
    >
      {/* The Gradient Text Logic */}
      <div
        style={{
          background: "linear-gradient(to bottom right, #a855f7, #06b6d4)", // Purple to Cyan
          backgroundClip: "text",
          color: "transparent",
          fontWeight: 900,
          fontFamily: "monospace",
          marginTop: "-2px", // Optical alignment
        }}
      >
        &gt;_
      </div>
    </div>,
    {
      ...size,
    },
  );
}
