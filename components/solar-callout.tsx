"use client";

import { Sun, ClipboardList } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

export function SolarCallout() {
  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto border border-yellow-400/20 rounded-lg p-8 bg-yellow-400/5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-400/15 flex items-center justify-center">
              <Sun className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2">
                Atenção — Consumidores com energia solar
              </p>
              <h2
                className="text-2xl md:text-3xl font-medium text-white mb-4 leading-snug"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Tem energia solar? Sua distribuidora pode estar te devendo dinheiro.
              </h2>
              <p className="text-white/65 leading-relaxed mb-3">
                Créditos de geração distribuída (painéis solares ou assinatura solar)
                precisam ser descontados automaticamente na sua fatura todos os meses.
                Quando a distribuidora falha nesse processo — por erro de cadastro,
                problema de sistema ou divergência no medidor — os créditos se acumulam
                ou simplesmente somem.
              </p>
              <p className="text-white/65 leading-relaxed mb-6">
                Em um caso real auditado pela COESA, um cliente comercial em Minas
                Gerais teve <span className="text-white font-medium">R$ 47.000 por ano</span> em
                créditos solares não aplicados pela CEMIG — o equivalente a 12 meses
                de fatura sem desconto. O problema existia há mais de um ano sem que
                o cliente soubesse.
              </p>
              <a
                href={AUDIT_FORM_ANCHOR}
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold px-6 py-3 rounded-sm transition-colors text-sm"
              >
                <ClipboardList className="w-4 h-4" />
                Verificar se meus créditos solares estão corretos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
