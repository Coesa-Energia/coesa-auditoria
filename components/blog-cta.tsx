import { ClipboardList } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

export function BlogCta() {
  return (
    <div className="my-10 p-8 bg-[#0a0a0a] border border-white/10 rounded-sm text-white text-center">
      <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-3">
        Auditoria gratuita
      </p>
      <h3
        className="text-2xl md:text-3xl font-medium mb-4"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        Sua conta pode estar com cobranças indevidas
      </h3>
      <p className="text-white/60 mb-8 max-w-lg mx-auto">
        Um consultor COESA verifica 17 pontos da sua fatura de energia
        gratuitamente. Sem cadastro, sem compromisso.
      </p>
      <a
        href={AUDIT_FORM_ANCHOR}
        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg rounded-sm transition-colors"
      >
        <ClipboardList className="w-5 h-5" />
        Solicitar auditoria gratuita
      </a>
      <p className="text-xs text-white/30 mt-4">
        100% gratuito · Resposta em até 24h úteis
      </p>
    </div>
  );
}
