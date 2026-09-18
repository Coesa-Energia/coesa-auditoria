import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Cobranças Indevidas na Conta de Energia: como identificar e contestar | COESA",
  description:
    "Um guia completo para identificar as cobranças indevidas mais comuns nas faturas de luz e como solicitar a devolução dos valores pagos a mais.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/cobrancas-indevidas-energia",
  },
  openGraph: {
    title: "Cobranças Indevidas na Conta de Energia: como identificar e contestar",
    description:
      "Um guia completo para identificar as cobranças indevidas mais comuns nas faturas de luz e como solicitar a devolução dos valores pagos a mais.",
    url: "https://auditoria.coesasolar.com.br/blog/cobrancas-indevidas-energia",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/cobrancas-indevidas-energia#article",
  headline: "Cobranças Indevidas na Conta de Energia: como identificar e contestar",
  description:
    "Um guia completo para identificar as cobranças indevidas mais comuns nas faturas de luz e como solicitar a devolução dos valores pagos a mais.",
  url: "https://auditoria.coesasolar.com.br/blog/cobrancas-indevidas-energia",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/cobrancas-indevidas-energia",
};

export default function CobrancasPage() {
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
                Auditoria
              </span>
              <span className="text-xs text-white/30">· 6 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Cobranças Indevidas na Conta de Energia: como identificar e contestar
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Cobranças indevidas na conta de energia são mais comuns do que a
              maioria das pessoas imagina. Erros de leitura, tarifas incorretas,
              impostos calculados sobre base errada e taxas que não deveriam
              existir — identificar e contestar essas cobranças pode gerar
              uma economia imediata e recuperar valores pagos nos últimos anos.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Por que cobranças indevidas ocorrem com tanta frequência?
            </h2>
            <p>
              As distribuidoras de energia processam milhões de faturas por mês
              usando sistemas automatizados que aplicam regras tarifárias complexas.
              Qualquer falha no cadastro do consumidor, atualização tarifária mal
              aplicada ou erro de leitura do medidor pode resultar em cobrança
              incorreta. Como os consumidores raramente conferem os detalhes da
              fatura, esses erros muitas vezes passam despercebidos por meses
              ou até anos.
            </p>
            <p>
              A complexidade da estrutura tarifária brasileira — com tarifas
              diferenciadas por grupo, classe, modalidade, horário de uso,
              bandeiras tarifárias, múltiplos impostos e encargos setoriais —
              cria um ambiente onde erros são difíceis de identificar sem
              conhecimento técnico específico.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              As cobranças indevidas mais comuns na fatura de energia
            </h2>
            <p>
              <strong className="text-white">Erro de leitura do medidor:</strong> A
              leitura do medidor pode ser feita incorretamente pelo leiturista ou
              estimada erroneamente pelo sistema quando a leitura não é realizada.
              Isso resulta em um consumo faturado diferente do consumo real.
            </p>
            <p>
              <strong className="text-white">Tarifa de iluminação pública (CIP) irregular:</strong> A
              Taxa de Iluminação Pública varia conforme o município e o tipo de
              ligação. Consumidores que mudam de endereço, ou cujo cadastro
              está incorreto, podem ser cobrados com uma CIP diferente da que
              corresponde ao seu endereço real.
            </p>
            <p>
              <strong className="text-white">ICMS calculado incorretamente:</strong> A
              alíquota de ICMS e a base de cálculo variam conforme a classe do
              consumidor e o estado. Quando o consumidor está enquadrado na classe
              errada ou quando a distribuidora aplica alíquota incorreta, o ICMS
              cobrado é maior do que o devido.
            </p>
            <p>
              <strong className="text-white">Bandeira tarifária errada:</strong> A
              bandeira cobrada na fatura deve corresponder à bandeira vigente no
              período de leitura. Erros de sistema ou faturamentos retroativos
              podem resultar na aplicação da bandeira incorreta.
            </p>
            <p>
              <strong className="text-white">Multa por atraso indevida:</strong> Multas
              de mora aplicadas mesmo quando o pagamento foi realizado no prazo,
              ou calculadas com juros acima do permitido pela regulação.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como identificar cobranças indevidas na sua fatura
            </h2>
            <p>
              O primeiro passo é ler a fatura com atenção, comparando o consumo
              atual com o histórico dos meses anteriores. Uma variação brusca no
              consumo sem mudança nos hábitos pode indicar erro de leitura ou
              problema no medidor.
            </p>
            <p>
              Em seguida, verifique a tarifa aplicada — ela deve corresponder
              ao seu grupo e classe tarifária. Compare o ICMS cobrado com a
              alíquota vigente no seu estado para a sua categoria de consumidor.
              Confira se a bandeira tarifária cobrada corresponde à bandeira
              oficial daquele mês, disponível no site da ANEEL.
            </p>
            <p>
              Para consumidores do Grupo A, verifique também se a demanda
              contratada está de acordo com o contrato e se a ultrapassagem de
              demanda, quando ocorrer, está sendo calculada corretamente.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como contestar cobranças indevidas
            </h2>
            <p>
              O primeiro canal é sempre a própria distribuidora. Você pode entrar
              em contato pelo telefone, pelo site ou pelo aplicativo da
              distribuidora e registrar uma reclamação formal. A distribuidora
              tem prazo regulatório para responder e solucionar a ocorrência.
            </p>
            <p>
              Se a distribuidora não resolver dentro do prazo ou não reconhecer
              a cobrança indevida, o próximo passo é a ANEEL. A agência
              reguladora recebe reclamações de consumidores e pode intimar a
              distribuidora a resolver o problema. O canal é o portal
              consumidor.aneel.gov.br.
            </p>
            <p>
              Nos casos em que a distribuidora reconhece a cobrança indevida,
              os valores são devolvidos geralmente como crédito nas faturas
              seguintes ou, em alguns casos, via transferência bancária. O prazo
              de restituição e a forma de devolução são regulamentados pela ANEEL.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O direito à restituição de valores pagos a mais
            </h2>
            <p>
              Consumidores que identificam cobranças indevidas históricas têm
              direito à restituição dos valores pagos a mais. O prazo geral para
              solicitar a revisão é de 5 anos, contados da data da cobrança
              indevida. Isso significa que uma auditoria realizada hoje pode
              recuperar valores cobrados incorretamente nos últimos 5 anos.
            </p>
            <p>
              O valor a ser restituído deve ser corrigido monetariamente conforme
              índice previsto no contrato de concessão da distribuidora. Em
              alguns casos, especialmente quando há má-fé comprovada da
              distribuidora, é possível pleitear indenização por danos morais
              via ação judicial.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. Os procedimentos de contestação
              variam conforme a distribuidora e a natureza da cobrança. Consulte
              um especialista para análise do seu caso específico.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
