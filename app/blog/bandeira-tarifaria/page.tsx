import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Bandeira Tarifária: o que significa cada cor e como afeta sua conta | COESA",
  description:
    "Saiba como as bandeiras verde, amarela, vermelha e escassez hídrica impactam o valor da sua conta de energia e como se preparar para cada cenário.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/bandeira-tarifaria",
  },
  openGraph: {
    title: "Bandeira Tarifária: o que significa cada cor e como afeta sua conta",
    description:
      "Saiba como as bandeiras verde, amarela, vermelha e escassez hídrica impactam o valor da sua conta de energia e como se preparar para cada cenário.",
    url: "https://auditoria.coesasolar.com.br/blog/bandeira-tarifaria",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/bandeira-tarifaria#article",
  headline: "Bandeira Tarifária: o que significa cada cor e como afeta sua conta",
  description:
    "Saiba como as bandeiras verde, amarela, vermelha e escassez hídrica impactam o valor da sua conta de energia e como se preparar para cada cenário.",
  url: "https://auditoria.coesasolar.com.br/blog/bandeira-tarifaria",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/bandeira-tarifaria",
};

export default function BandeiraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Tarifa
              </span>
              <span className="text-xs text-white/30">· 6 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Bandeira Tarifária: o que significa cada cor e como afeta sua conta
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Toda mês, a ANEEL define uma bandeira tarifária que pode encarecer
              sua conta de energia. Entender o que cada cor significa ajuda você
              a planejar o consumo e a identificar quando está pagando mais do que
              deveria.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O que é a bandeira tarifária?
            </h2>
            <p>
              A bandeira tarifária é um sistema de sinalização criado pela ANEEL
              (Agência Nacional de Energia Elétrica) em 2015 para indicar as
              condições de geração de energia elétrica no Brasil. Quando os
              reservatórios das usinas hidrelétricas estão com nível baixo ou
              quando há necessidade de acionar termelétricas mais caras, a bandeira
              muda de cor e uma taxa adicional é cobrada na conta de energia.
            </p>
            <p>
              A bandeira tarifária é revisada mensalmente, sempre no último dia
              útil do mês anterior. A cor definida vale para todos os consumidores
              conectados ao Sistema Interligado Nacional (SIN), com exceção de
              algumas regiões isoladas.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              As cores das bandeiras tarifárias e seus valores
            </h2>
            <p>
              O sistema de bandeiras funciona de forma similar a um semáforo, com
              cores que indicam o nível de alerta para o sistema elétrico:
            </p>
            <p>
              <strong className="text-white">Bandeira Verde:</strong> As condições
              de geração de energia são favoráveis. Não há cobrança adicional na
              conta de luz. É a situação ideal, que ocorre quando os reservatórios
              estão cheios e o sistema opera com folga.
            </p>
            <p>
              <strong className="text-white">Bandeira Amarela:</strong> As condições
              de geração merecem atenção. É cobrada uma taxa adicional de R$ 1,885
              por 100 kWh consumidos (valores de referência 2024-2025, sujeitos a
              atualização pela ANEEL). Para uma residência que consome 300 kWh por
              mês, isso representa aproximadamente R$ 5,65 a mais na fatura.
            </p>
            <p>
              <strong className="text-white">Bandeira Vermelha — Patamar 1:</strong>{" "}
              As condições de geração são mais difíceis. A taxa adicional sobe para
              R$ 3,971 por 100 kWh. Para 300 kWh de consumo, o acréscimo é de
              aproximadamente R$ 11,91.
            </p>
            <p>
              <strong className="text-white">Bandeira Vermelha — Patamar 2:</strong>{" "}
              Condições críticas de geração. A taxa é de R$ 9,492 por 100 kWh.
              Para 300 kWh, o acréscimo chega a R$ 28,48 — o equivalente a quase
              10% de uma conta de R$ 300,00.
            </p>
            <p>
              <strong className="text-white">Bandeira de Escassez Hídrica:</strong>{" "}
              Criada em 2021 em situação de emergência, é acionada apenas em crises
              severas do setor elétrico. A taxa adicional chega a R$ 14,20 por
              100 kWh.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como a bandeira tarifária aparece na sua conta de energia?
            </h2>
            <p>
              A cobrança de bandeira tarifária aparece como um item separado na
              sua fatura de energia, geralmente identificado como &ldquo;Bandeira
              Tarifária&rdquo; ou pelo nome da cor correspondente. O valor é calculado
              multiplicando a taxa da bandeira pelo consumo em kWh dividido por
              100.
            </p>
            <p>
              É importante verificar se a bandeira cobrada na sua fatura
              corresponde à bandeira vigente no período de leitura. Erros de
              sistema ou faturamento retroativo podem resultar em cobranças
              incorretas. Por exemplo, se a distribuidora faturar um período em
              que vigorava a bandeira amarela com a taxa da bandeira vermelha, você
              pagará mais do que o correto.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Quem está isento da cobrança de bandeira tarifária?
            </h2>
            <p>
              Nem todos os consumidores pagam a taxa de bandeira tarifária. Os
              beneficiários da Tarifa Social de Energia Elétrica (TSEE), também
              conhecida como Tarifa Baixa Renda, têm isenção da cobrança da
              bandeira tarifária na parcela subsidiada do consumo.
            </p>
            <p>
              Consumidores atendidos por sistemas isolados (regiões que não estão
              conectadas ao Sistema Interligado Nacional) também não são afetados
              pelas bandeiras tarifárias. Isso inclui parte da região Norte do
              Brasil.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como a bandeira tarifária impacta empresas?
            </h2>
            <p>
              Para empresas com alto consumo de energia, o impacto das bandeiras
              tarifárias pode ser significativo. Uma indústria que consome 50.000
              kWh por mês pagará R$ 4.746,00 a mais apenas de bandeira vermelha
              patamar 2 — um custo extra que pode comprometer o orçamento e a
              competitividade.
            </p>
            <p>
              Uma das estratégias para reduzir esse impacto é a migração para o
              Mercado Livre de Energia, onde os preços são negociados em contratos
              que podem ou não incluir a variação de bandeiras. Outra alternativa
              é a adoção de geração distribuída, como energia solar, que reduz o
              consumo da rede e, consequentemente, a base de cálculo sobre a qual
              a bandeira incide.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como verificar se a bandeira foi cobrada corretamente?
            </h2>
            <p>
              Para verificar se a bandeira tarifária foi cobrada corretamente na
              sua conta, você precisa saber qual era a bandeira vigente no período
              de leitura da sua fatura. O histórico de bandeiras está disponível
              no site da ANEEL. Com essa informação, você pode comparar a taxa
              cobrada na fatura com a taxa oficial e verificar se os valores
              conferem.
            </p>
            <p>
              Em uma auditoria completa de conta de energia, esse é um dos 17
              pontos verificados pelos consultores COESA. Muitas vezes, erros de
              bandeira tarifária acontecem de forma sistemática ao longo de meses,
              acumulando um valor considerável a ser restituído.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. Os valores das bandeiras
              tarifárias são definidos pela ANEEL e atualizados periodicamente.
              Consulte o site da ANEEL para os valores vigentes.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
