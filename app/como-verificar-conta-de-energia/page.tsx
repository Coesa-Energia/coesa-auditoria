import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Como Verificar a Conta de Energia Elétrica — Guia Completo | COESA",
  description:
    "Aprenda como verificar se sua conta de energia elétrica está correta. Guia completo com os 17 pontos que todo consumidor deve conferir na fatura de luz.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/como-verificar-conta-de-energia",
  },
  openGraph: {
    title: "Como Verificar a Conta de Energia Elétrica — Guia Completo",
    description:
      "Aprenda como verificar se sua conta de energia elétrica está correta. Os 17 pontos que todo consumidor deve conferir na fatura.",
    type: "article",
    locale: "pt_BR",
    url: "https://auditoria.coesasolar.com.br/como-verificar-conta-de-energia",
  },
  robots: { index: true, follow: true },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Verificar a Conta de Energia Elétrica — Guia Completo",
  description:
    "Aprenda como verificar se sua conta de energia elétrica está correta. Guia completo com os 17 pontos que todo consumidor deve conferir na fatura de luz.",
  url: "https://auditoria.coesasolar.com.br/como-verificar-conta-de-energia",
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  inLanguage: "pt-BR",
};

export default function ComoVerificarContaDeEnergia() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
          ← Auditoria gratuita
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 tracking-tight leading-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Como verificar a conta de energia elétrica
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Guia prático com os 17 pontos que todo consumidor deve conferir na fatura de luz antes de pagar.
        </p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Por que verificar a conta de energia?
            </h2>
            <p className="mb-3">
              Segundo a ANEEL (Agência Nacional de Energia Elétrica), erros em faturas de energia elétrica são uma das principais causas de reclamações de consumidores no Brasil. Cobranças de tributos calculadas incorretamente, enquadramento tarifário inadequado e bandeiras aplicadas de forma errada podem representar centenas ou até milhares de reais pagos a mais por mês.
            </p>
            <p>
              O problema é que verificar a conta de energia elétrica exige conhecimento técnico sobre tarifas, tributos estaduais, normas da ANEEL e particularidades de cada distribuidora. Neste guia, vamos mostrar os principais pontos que você deve conferir — e como a auditoria de conta de energia da COESA pode fazer esse trabalho por você, de forma gratuita.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              1. Tarifa aplicada: você está no enquadramento correto?
            </h2>
            <p className="mb-3">
              O primeiro passo para verificar a fatura de energia é confirmar se a tarifa cobrada corresponde ao seu perfil de consumo. No Brasil, as tarifas são divididas em grupos tarifários:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li><strong>Grupo B:</strong> consumidores de baixa tensão (residências, pequenos comércios)</li>
              <li><strong>Grupo A:</strong> consumidores de média e alta tensão (indústrias, grandes comércios)</li>
            </ul>
            <p>
              Dentro de cada grupo, existem subgrupos com tarifas distintas. Muitos consumidores comerciais e industriais estão enquadrados em subgrupos que não correspondem ao seu perfil real de consumo, resultando em cobranças superiores ao correto.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              2. ICMS: alíquota correta para o seu estado?
            </h2>
            <p className="mb-3">
              O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) sobre energia elétrica varia por estado e por faixa de consumo. Em Minas Gerais, por exemplo, a alíquota para consumidores residenciais com consumo até 150 kWh é reduzida em relação à alíquota padrão.
            </p>
            <p>
              Para verificar se o ICMS está correto na sua fatura, você precisa conhecer a alíquota vigente no seu estado, a faixa de consumo aplicável e as isenções que podem se aplicar ao seu perfil. Consumidores de baixa renda têm direito a tarifas diferenciadas — verifique se você está sendo beneficiado corretamente.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              3. Bandeiras tarifárias: foi aplicada a bandeira correta?
            </h2>
            <p className="mb-3">
              As bandeiras tarifárias (verde, amarela, vermelha 1 e vermelha 2) são cobranças adicionais que refletem as condições de geração de energia no país. Elas são definidas mensalmente pela ANEEL e devem ser aplicadas de acordo com o calendário oficial.
            </p>
            <p>
              Um erro comum é a aplicação da bandeira incorreta no mês de referência da fatura. Para verificar se a bandeira foi aplicada corretamente, consulte o histórico de bandeiras no site da ANEEL e compare com o que foi cobrado na sua fatura.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              4. Consumo faturado: o medidor está correto?
            </h2>
            <p className="mb-3">
              Verifique se o consumo registrado na fatura corresponde à diferença entre a leitura atual e a leitura anterior do medidor. Problemas técnicos no medidor, leituras estimadas por vários meses consecutivos e erros de digitação podem resultar em cobranças incorretas.
            </p>
            <p>
              Se o seu consumo apresentar variação significativa (mais de 30%) em relação aos meses anteriores sem uma justificativa clara, solicite a revisão da leitura à distribuidora. O histórico de consumo disponível na própria fatura é um ótimo ponto de partida para identificar anomalias.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              5. PIS/COFINS e outros tributos federais
            </h2>
            <p className="mb-3">
              Além do ICMS, a fatura de energia inclui PIS (Programa de Integração Social) e COFINS (Contribuição para o Financiamento da Seguridade Social). As alíquotas desses tributos variam conforme o regime tributário do consumidor e o tipo de energia (convencional, solar, PCH etc.).
            </p>
            <p>
              Para consumidores pessoas jurídicas, as alíquotas de PIS/COFINS podem variar entre o regime cumulativo e não-cumulativo, gerando diferenças significativas no valor final da conta. Verificar se as alíquotas estão corretas exige conhecimento contábil e tributário específico.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              6. Demanda contratada: você está pagando pelo que usa?
            </h2>
            <p className="mb-3">
              Para consumidores do Grupo A (média e alta tensão), a demanda contratada é um dos itens mais importantes da fatura — e um dos mais sujeitos a erros. A demanda é cobrada independentemente de ser utilizada, por isso é fundamental que o valor contratado corresponda à demanda real do estabelecimento.
            </p>
            <p>
              Uma demanda contratada muito acima da demanda medida representa pagamento em excesso. Uma demanda muito abaixo pode gerar multas por ultrapassagem. O equilíbrio ideal resulta na conta de energia mais eficiente para o seu perfil de consumo.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              7. Créditos de energia solar: estão sendo descontados?
            </h2>
            <p className="mb-3">
              Se você possui painéis solares instalados ou participa de um programa de energia solar por assinatura (geração distribuída remota), seus créditos de energia devem aparecer na fatura como desconto no consumo. Créditos não aplicados ou aplicados incorretamente representam perda financeira direta.
            </p>
            <p>
              Verifique mensalmente se os créditos gerados correspondem aos créditos descontados na fatura. Caso identifique discrepâncias, acione a distribuidora imediatamente — os créditos têm validade de 60 meses.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-medium text-foreground mb-3"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Como fazer a auditoria de conta de energia gratuitamente
            </h2>
            <p className="mb-3">
              Verificar todos esses pontos manualmente exige tempo e conhecimento técnico especializado. A alternativa mais eficiente é solicitar uma auditoria de conta de energia gratuita com um consultor especializado.
            </p>
            <p className="mb-3">
              A COESA Energia oferece uma auditoria gratuita que analisa 17 pontos críticos da sua fatura — incluindo todos os itens mencionados neste guia e mais: iluminação pública (CIP/COSIP), horário de ponta, fator de potência, modalidade tarifária, cobranças duplicadas e histórico de consumo.
            </p>
            <p>
              O processo é simples: você preenche o formulário com o valor médio da sua conta de energia e o nome da distribuidora. Um consultor especializado retorna com o resultado detalhado em até 24 horas úteis — sem custo e sem compromisso.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-[#f8faf8] rounded-lg border border-border">
          <h3
            className="text-xl font-medium text-foreground mb-2"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Prefere que um especialista verifique por você?
          </h3>
          <p className="text-muted-foreground mb-6">
            Auditoria gratuita de conta de energia. Um consultor COESA analisa 17 pontos da sua fatura em até 24h.
          </p>
          <a
            href={AUDIT_FORM_ANCHOR}
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            <ClipboardList className="w-5 h-5" />
            Solicitar auditoria gratuita
          </a>
        </div>
      </div>
    </main>
  );
}
