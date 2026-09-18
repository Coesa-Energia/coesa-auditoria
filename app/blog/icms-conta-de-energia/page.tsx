import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "ICMS na Conta de Energia: o que é e como verificar se está correto | COESA",
  description:
    "Entenda como o ICMS é calculado na sua fatura de luz, quais são as alíquotas por estado e como identificar se você está pagando mais do que deveria.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/icms-conta-de-energia",
  },
  openGraph: {
    title: "ICMS na Conta de Energia: o que é e como verificar se está correto",
    description:
      "Entenda como o ICMS é calculado na sua fatura de luz, quais são as alíquotas por estado e como identificar se você está pagando mais do que deveria.",
    url: "https://auditoria.coesasolar.com.br/blog/icms-conta-de-energia",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/icms-conta-de-energia#article",
  headline: "ICMS na Conta de Energia: o que é e como verificar se está correto",
  description:
    "Entenda como o ICMS é calculado na sua fatura de luz, quais são as alíquotas por estado e como identificar se você está pagando mais do que deveria.",
  url: "https://auditoria.coesasolar.com.br/blog/icms-conta-de-energia",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/icms-conta-de-energia",
};

export default function IcmsPage() {
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
                Impostos
              </span>
              <span className="text-xs text-white/30">· 7 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              ICMS na Conta de Energia: o que é e como verificar se está correto
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              O ICMS é um dos impostos que mais pesam na conta de energia elétrica
              dos brasileiros. Em alguns estados, ele pode representar até 30% do
              valor total da fatura. Mas muitos consumidores pagam o ICMS de forma
              incorreta — e nem sabem disso.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O que é o ICMS na conta de energia?
            </h2>
            <p>
              O ICMS (Imposto sobre Circulação de Mercadorias e Serviços) é um
              tributo estadual que incide sobre o consumo de energia elétrica. Cada
              estado brasileiro define sua própria alíquota, que pode variar
              significativamente. Em Minas Gerais, por exemplo, a alíquota padrão
              é de 30%. Em São Paulo, é de 25% para consumidores residenciais.
            </p>
            <p>
              O que poucos consumidores sabem é que a base de cálculo do ICMS é
              feita de forma peculiar: o imposto incide sobre si mesmo, em um
              mecanismo chamado cálculo &ldquo;por dentro&rdquo;. Isso significa que a alíquota
              efetiva é maior do que a alíquota nominal indicada na fatura.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como o ICMS é calculado na sua fatura de luz?
            </h2>
            <p>
              Na maioria das distribuidoras, o ICMS é calculado sobre o valor
              total da energia consumida mais as demais tarifas da fatura. O
              cálculo segue a seguinte lógica: a distribuidora soma o valor da
              energia, divide pelo complemento da alíquota (1 menos a alíquota) e
              obtém a base de cálculo do ICMS. Depois, aplica a alíquota sobre
              essa base.
            </p>
            <p>
              Por exemplo: se você consumiu R$ 300,00 em energia e a alíquota de
              ICMS do seu estado é 30%, a base de cálculo será R$ 300,00 ÷ 0,70
              = R$ 428,57. O ICMS será 30% de R$ 428,57 = R$ 128,57. O valor
              final da conta será R$ 300,00 + R$ 128,57 = R$ 428,57. Percebe como
              o ICMS efetivo é bem maior do que simplesmente 30% de R$ 300,00?
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Alíquotas de ICMS por estado em 2025
            </h2>
            <p>
              As alíquotas de ICMS sobre energia elétrica variam de estado para
              estado e podem ter reduções para categorias específicas de
              consumidores. Em geral, consumidores residenciais de baixa renda
              (Tarifa Social) têm isenção ou alíquota reduzida. Empresas no
              Simples Nacional também podem ter direito a benefícios fiscais.
            </p>
            <p>
              As alíquotas mais comuns no Brasil em 2025 são: Minas Gerais (30%),
              São Paulo (25% residencial, 12% industrial em certos casos), Rio de
              Janeiro (18%), Paraná (25%), Rio Grande do Sul (30%), Bahia (25%),
              Pernambuco (25%), Goiás (26%). Esses percentuais podem ser alterados
              por lei estadual, portanto, sempre verifique a legislação atual do
              seu estado.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Quais situações geram cobrança indevida de ICMS?
            </h2>
            <p>
              Existem vários cenários em que o ICMS é cobrado de forma incorreta
              na conta de energia elétrica. Os mais comuns são:
            </p>
            <p>
              <strong className="text-white">Enquadramento tarifário errado:</strong> Empresas classificadas como
              consumidores comerciais quando deveriam ser industriais pagam
              alíquotas de ICMS mais altas. A categoria industrial tem benefícios
              fiscais em muitos estados que reduzem significativamente o imposto.
            </p>
            <p>
              <strong className="text-white">Tarifa Social não aplicada:</strong> Famílias de baixa renda inscritas
              no CadÚnico têm direito à isenção ou redução de ICMS. Quando a
              distribuidora não aplica a Tarifa Social corretamente, o consumidor
              paga mais imposto do que deveria.
            </p>
            <p>
              <strong className="text-white">ICMS sobre itens isentos:</strong> Alguns componentes da fatura de
              energia, como determinadas taxas e encargos, não são base de cálculo
              do ICMS. Quando a distribuidora inclui esses itens no cálculo, o
              imposto fica maior do que o correto.
            </p>
            <p>
              <strong className="text-white">Alíquota incorreta:</strong> Erros de sistema nas distribuidoras podem
              aplicar a alíquota errada — por exemplo, usando a alíquota de
              consumidores comerciais para um consumidor residencial ou vice-versa.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como verificar o ICMS na sua conta de energia
            </h2>
            <p>
              Para verificar se o ICMS está sendo cobrado corretamente, você
              precisa localizar na sua fatura os seguintes itens: o valor da
              energia consumida, a alíquota de ICMS indicada e o valor do ICMS
              cobrado. Com esses dados em mãos, você pode fazer o cálculo manual
              e comparar com o que está sendo cobrado.
            </p>
            <p>
              Mas atenção: o cálculo do ICMS envolve particularidades técnicas que
              variam conforme a distribuidora, o estado e o tipo de consumidor.
              Uma diferença de poucos reais por fatura pode parecer pequena, mas
              acumulada ao longo de anos pode representar um valor significativo
              a ser restituído.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como solicitar a devolução de ICMS cobrado indevidamente
            </h2>
            <p>
              Se você identificar que o ICMS foi cobrado incorretamente, você tem
              o direito de solicitar a restituição dos valores pagos a mais. O
              prazo para solicitar varia conforme a legislação estadual, mas em
              geral é de 5 anos retroativos à data da reclamação.
            </p>
            <p>
              O processo começa com uma reclamação formal à distribuidora, que
              deve analisar e responder dentro do prazo regulatório. Se a
              distribuidora não resolver, você pode registrar uma reclamação na
              ANEEL (Agência Nacional de Energia Elétrica) ou na ouvidoria
              estadual de energia. Em casos mais complexos, a via judicial pode
              ser necessária.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              A auditoria de ICMS como ponto de partida
            </h2>
            <p>
              A verificação do ICMS é apenas um dos 17 pontos que os consultores
              COESA analisam em uma auditoria de conta de energia. Muitas vezes,
              o problema não está no ICMS em si, mas em outros itens da fatura que
              aumentam artificialmente a base de cálculo do imposto.
            </p>
            <p>
              Uma auditoria completa identifica todos os pontos de cobrança
              indevida e apresenta um relatório detalhado com o potencial de
              economia e o caminho para recuperar os valores pagos a mais. O
              serviço é 100% gratuito e sem compromisso.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. As alíquotas de ICMS podem ser
              alteradas por legislação estadual. Consulte um especialista para
              análise específica do seu caso.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
