import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sadiq Usman Nagoda — Software Engineering Portfolio";

export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/fraunces/fraunces-latin-400-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/fraunces/fraunces-latin-600-normal.woff")),
  ]);

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
          backgroundColor: "#1B262C",
        }}
      >
        <div style={{ display: "flex", color: "#3282B8", fontSize: 22, fontFamily: "Fraunces" }}>
          SOFTWARE ENGINEERING PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            color: "#BBE1FA",
            fontSize: 72,
            fontFamily: "Fraunces",
            fontWeight: 600,
            marginTop: 20,
          }}
        >
          Sadiq Usman Nagoda
        </div>
        <div style={{ display: "flex", color: "#BBE1FA", opacity: 0.7, fontSize: 28, fontFamily: "Fraunces", marginTop: 24 }}>
          Software, engineered deliberately.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: regular, weight: 400, style: "normal" },
        { name: "Fraunces", data: semibold, weight: 600, style: "normal" },
      ],
    }
  );
}
