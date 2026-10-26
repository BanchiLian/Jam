import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Huldra — Clareza que deixa marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OFF_WHITE = "#F3F2EE";

async function svgDataUrl(arquivo: string, recolorir: boolean) {
  let svg = await readFile(join(process.cwd(), "brand/logo", arquivo), "utf8");
  if (recolorir) svg = svg.replace(/#161a21/gi, OFF_WHITE);
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default async function Image() {
  const [caixa, logotipo, assinatura] = await Promise.all([
    svgDataUrl("huldra-simbolo-caixa.svg", false),
    svgDataUrl("huldra-logotipo.svg", true),
    svgDataUrl("huldra-assinatura.svg", true),
  ]);

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
          background: "#161A21",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={caixa} width={203} height={159} alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logotipo} width={600} height={137} alt="" style={{ marginTop: 56 }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assinatura} width={420} height={35} alt="" style={{ marginTop: 40 }} />
      </div>
    ),
    size,
  );
}
