"use client";

import { useEffect, useRef } from "react";

const FORM_ORIGIN = "https://aios.dev.br";
const FORM_SRC = `${FORM_ORIGIN}/f/landing-auditoria-gratuita-conta-de-luz`;
const FRAME_ID = "gf-embed-landing-auditoria-gratuita-conta-de-luz";
const INITIAL_HEIGHT = 620;
const HEIGHT_KEY = "__gfEmbedHeight";

const BOOTSTRAP = `(function(){
  if (window.${HEIGHT_KEY} !== undefined) return;
  window.${HEIGHT_KEY} = 0;
  window.addEventListener("message", function (e) {
    if (e.origin !== ${JSON.stringify(FORM_ORIGIN)}) return;
    var d = e.data;
    if (!d || d.type !== "gf-resize") return;
    if (typeof d.height !== "number" || d.height <= 0) return;
    window.${HEIGHT_KEY} = d.height;
    var el = document.getElementById(${JSON.stringify(FRAME_ID)});
    if (el) el.style.height = d.height + "px";
  });
})();`;

declare global {
  interface Window {
    [HEIGHT_KEY]?: number;
  }
}

export function AuditFormEmbed() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    function apply(value: number) {
      if (frame && value > 0) frame.style.height = `${value}px`;
    }

    apply(window[HEIGHT_KEY] ?? 0);

    function onMessage(event: MessageEvent) {
      if (event.origin !== FORM_ORIGIN) return;
      const data = event.data;
      if (!data || data.type !== "gf-resize") return;
      if (typeof data.height !== "number" || data.height <= 0) return;
      apply(data.height);
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-sm bg-white">
      <script dangerouslySetInnerHTML={{ __html: BOOTSTRAP }} />
      <iframe
        ref={frameRef}
        id={FRAME_ID}
        src={FORM_SRC}
        title="Landing – Auditoria Gratuita Conta de Luz"
        width="100%"
        height={INITIAL_HEIGHT}
        style={{ border: 0, display: "block", width: "100%" }}
        sandbox="allow-scripts allow-forms allow-same-origin allow-top-navigation"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
