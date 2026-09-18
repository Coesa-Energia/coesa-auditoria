"use client";

import { AlertCircle, CheckCircle2, ClipboardList } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

const signals = [
  {
    alert: true,
    label: "ICMS acima de 25% do valor total",
    detail: "A alíquota aplicada pode ser maior do que a prevista para sua classe de consumidor",
  },
  {
    alert: true,
    label: "Bandeira tarifária diferente do mês de referência",
    detail: "Verifique a bandeira oficial no site da ANEEL e compare com o que está na sua fatura",
  },
  {
    alert: true,
    label: 'Leitura "estimada" no lugar de medida',
    detail: "Quando o leiturista não consegue acessar o medidor, a distribuidora usa uma estimativa — que pode ser maior do que o consumo real",
  },
  {
    alert: true,
    label: "Créditos de geração solar não aparecem na fatura",
    detail: "Se você tem painéis solares ou assina energia solar, os créditos precisam aparecer na fatura mensalmente",
  },
  {
    alert: true,
    label: "Demanda faturada maior que o maior pico registrado",
    detail: "Empresas pagam pela demanda contratada — se for maior do que o necessário, você paga por potência que não usa",
  },
  {
    alert: true,
    label: "Multa ou juros cobrados sem atraso real",
    detail: "Confirme as datas: muitas cobranças de mora são aplicadas sobre pagamentos feitos dentro do prazo",
  },
  {
    alert: false,
    label: "Nenhum desses sinais na sua conta",
    detail: "Uma auditoria completa cobre mais 11 pontos que não aparecem facilmente na leitura visual da fatura",
  },
];

export function BillingSignals() {
  return (
    <section id="sinais" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
              Autodiagnóstico
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-foreground mb-4"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Sua conta tem esses sinais?
            </h2>
            <p className="text-lg text-muted-foreground">
              Abra sua última fatura de energia e verifique cada item abaixo.
              Se qualquer um se aplicar, você provavelmente está pagando mais
              do que deveria.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {signals.map((s) => (
              <div
                key={s.label}
                className={`flex items-start gap-4 p-4 rounded-lg border ${
                  s.alert
                    ? "border-amber-200 bg-amber-50"
                    : "border-green-200 bg-green-50"
                }`}
              >
                {s.alert ? (
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={`font-medium text-sm ${s.alert ? "text-amber-900" : "text-green-900"}`}>
                    {s.label}
                  </p>
                  <p className={`text-xs mt-0.5 leading-relaxed ${s.alert ? "text-amber-700" : "text-green-700"}`}>
                    {s.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Independente do resultado, uma auditoria completa cobre 17 pontos
              — muitos deles invisíveis na leitura normal da fatura.
            </p>
            <a
              href={AUDIT_FORM_ANCHOR}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-sm shadow-md hover:shadow-lg transition-all"
            >
              <ClipboardList className="w-5 h-5" />
              Quero que a COESA verifique minha fatura
            </a>
            <p className="mt-3 text-sm text-muted-foreground">100% gratuito · Sem cadastro · Resultado em até 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
}
