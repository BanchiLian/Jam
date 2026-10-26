import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Huldra — Clareza que deixa marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const svg = (await readFile(join(process.cwd(), "public/brand/huldra-estrelas.svg"), "utf8")).replace(
    /#fff/gi,
    "#f3f2ee",
  );
  const estrelas = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#161A21",
          color: "#f3f2ee",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 168, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Huldra</div>
          <div style={{ fontSize: 44, marginTop: 28, color: "#d5dceb" }}>Clareza que deixa marca</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={estrelas} width={328} height={246} alt="" />
      </div>
    ),
    size,
  );
}
