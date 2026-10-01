import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Muhammad Dilawar Qayoum — Mobile apps with AI built in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#1c1917",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, color: "#0f766e" }}>Muhammad Dilawar Qayoum</div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.15, letterSpacing: -1, maxWidth: 920 }}>
          Mobile apps with AI built in
        </div>
        <div style={{ fontSize: 28, color: "#57534e" }}>iPhone and Android apps for clients</div>
      </div>
    ),
    { ...size },
  );
}
