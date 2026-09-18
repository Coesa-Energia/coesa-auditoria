"use client";

import { ClipboardList, Search, BarChart3 } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Preencha o formulário",
    description:
      "Informe nome, contato, valor da última conta e a distribuidora. Leva menos de um minuto.",
  },
  {
    num: "02",
    icon: Search,
    title: "Consultor analisa sua fatura",
    description:
      "Nosso especialista verifica 17 pontos críticos da sua conta de energia gratuitamente.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Receba o resultado",
    description:
      "Descubra quanto você pode economizar e receba uma proposta personalizada.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Simples e rápido
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Como funciona a auditoria de conta de energia
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-14">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-2">
                Passo {step.num}
              </p>
              <h3
                className="text-xl font-medium text-foreground mb-3"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={AUDIT_FORM_ANCHOR}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition-all"
          >
            <ClipboardList className="w-5 h-5" />
            Auditar minha fatura agora
          </a>
          <p className="mt-3 text-sm text-muted-foreground">100% gratuito · Sem compromisso</p>
        </div>
      </div>
    </section>
  );
}
