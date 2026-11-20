import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Auditoria Gratuita de Fatura de Energia | COESA Energia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "#25D366",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(37,211,102,0.12)",
            border: "1px solid rgba(37,211,102,0.3)",
            borderRadius: "100px",
            padding: "10px 24px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
            }}
          />
          <span style={{ color: "#25D366", fontSize: "20px", fontFamily: "Arial" }}>
            Auditoria 100% gratuita
          </span>
        </div>

        <div
          style={{
            color: "white",
            fontSize: "68px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "980px",
            marginBottom: "28px",
            fontFamily: "Arial",
          }}
        >
          Sua conta de energia pode estar errada
        </div>

        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "26px",
            textAlign: "center",
            marginBottom: "52px",
            fontFamily: "Arial",
          }}
        >
          17 verificações · Resultado em até 24h úteis
        </div>

        <div
          style={{
            background: "#25D366",
            color: "white",
            fontSize: "22px",
            fontWeight: "600",
            padding: "14px 44px",
            borderRadius: "4px",
            fontFamily: "Arial",
            display: "flex",
          }}
        >
          COESA Energia — Auditar grátis
        </div>
      </div>
    ),
    { ...size }
  );
}
