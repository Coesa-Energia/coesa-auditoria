import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_POS_LEAD_URL } from "@/lib/utils";

type LeadThanksProps = {
  eyebrow: string;
  title: string;
  lead: string;
  waLabel: string;
  waHint: string;
  nextSteps: string[];
};

// Páginas de destino do formulário. É o único lugar do site onde o WhatsApp
// aparece — o lead já foi enviado, então o contato direto deixa de atropelar o
// formulário.
export function LeadThanks({
  eyebrow,
  title,
  lead,
  waLabel,
  waHint,
  nextSteps,
}: LeadThanksProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <div className="container mx-auto px-4 py-12 lg:py-20 flex-1 flex flex-col items-center justify-center text-center">
        <Link href="/" className="mb-10">
          <Image
            src="/images/logo-coesa-white.png"
            alt="COESA Energia"
            width={120}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center mb-8">
          <CheckCircle2 className="w-7 h-7 text-green-400" />
        </div>

        <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight max-w-2xl"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl">{lead}</p>

        <a
          href={WHATSAPP_POS_LEAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all min-w-[280px]"
        >
          <MessageCircle className="w-6 h-6" />
          {waLabel}
        </a>
        <p className="mt-4 text-sm text-white/40">{waHint}</p>

        <div className="mt-14 w-full max-w-md text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Próximos passos
          </p>
          <ol className="space-y-4">
            {nextSteps.map((step, i) => (
              <li key={step} className="flex gap-3 text-white/70">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-xs flex items-center justify-center text-white/80">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/"
          className="mt-14 text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
