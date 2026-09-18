"use client";

import { TrendingUp, MapPin, Calendar, ClipboardList, Star, Sun } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

const testimonials = [
  {
    text: "Achei que pagar R$ 380 por mês era normal. O consultor COESA identificou que meu ICMS estava sendo calculado errado há mais de um ano. Recuperamos R$ 3.200 em créditos.",
    name: "Fernanda M.",
    location: "Belo Horizonte - MG",
    type: "Cliente residencial",
  },
  {
    text: "Empresa do ramo alimentício. A auditoria identificou que nosso enquadramento tarifário estava incorreto para o nosso perfil de consumo. A mudança reduziu 28% da fatura mensal.",
    name: "Ricardo T.",
    location: "São Paulo - SP",
    type: "Cliente comercial",
  },
];

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Casos reais
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Resultados de auditoria
          </h2>
        </div>

        {/* Featured case study */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white border border-border rounded-lg p-8 lg:p-12 shadow-sm">
            {/* Solar badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1.5 mb-6">
              <Sun className="w-3.5 h-3.5 text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-700">Créditos solares não aplicados pela distribuidora</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Minas Gerais
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Consumidor comercial — CEMIG
              </span>
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              &ldquo;Cliente com conta mensal de R$ 5.291 na CEMIG. A auditoria
              identificou que os créditos de energia solar injetada na rede
              <strong> não estavam sendo descontados da fatura há mais de 12 meses</strong> —
              a distribuidora recebia a energia gerada mas não compensava o cliente.&rdquo;
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Economia identificada</p>
                <p
                  className="text-2xl md:text-3xl font-medium text-primary"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  R$ 47.000
                </p>
                <p className="text-xs text-muted-foreground">por ano</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Redução na fatura</p>
                <p
                  className="text-2xl md:text-3xl font-medium text-foreground"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  R$ 3.917
                </p>
                <p className="text-xs text-muted-foreground">por mês</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-sm text-muted-foreground mb-1">Desconto</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p
                    className="text-2xl md:text-3xl font-medium text-primary"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    30%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            * Informações pessoais removidas para proteção do cliente. Resultado real de auditoria.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-border rounded-lg p-6 shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location} · {t.type}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={AUDIT_FORM_ANCHOR}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition-all"
          >
            <ClipboardList className="w-5 h-5" />
            Quero auditar minha fatura
          </a>
        </div>
      </div>
    </section>
  );
}
