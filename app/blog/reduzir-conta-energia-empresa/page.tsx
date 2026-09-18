import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Como Reduzir a Conta de Energia da Sua Empresa em até 30% | COESA",
  description:
    "Estratégias práticas e legais para empresas reduzirem o custo com energia elétrica, desde a revisão tarifária até o uso de geração distribuída.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/reduzir-conta-energia-empresa",
  },
  openGraph: {
    title: "Como Reduzir a Conta de Energia da Sua Empresa em até 30%",
    description:
      "Estratégias práticas e legais para empresas reduzirem o custo com energia elétrica, desde a revisão tarifária até o uso de geração distribuída.",
    url: "https://auditoria.coesasolar.com.br/blog/reduzir-conta-energia-empresa",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/reduzir-conta-energia-empresa#article",
  headline: "Como Reduzir a Conta de Energia da Sua Empresa em até 30%",
  description:
    "Estratégias práticas e legais para empresas reduzirem o custo com energia elétrica, desde a revisão tarifária até o uso de geração distribuída.",
  url: "https://auditoria.coesasolar.com.br/blog/reduzir-conta-energia-empresa",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/reduzir-conta-energia-empresa",
};

export default function ReduzirEmpresaPage() {
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
                Empresas
              </span>
              <span className="text-xs text-white/30">· 7 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Como Reduzir a Conta de Energia da Sua Empresa em até 30%
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Para muitas empresas, a energia elétrica é o segundo ou terceiro
              maior custo operacional. Mas diferente de outros custos, a conta de
              energia tem várias oportunidades de redução legal e imediata que
              a maioria das empresas nunca explorou.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Por onde começar: a auditoria de fatura
            </h2>
            <p>
              O primeiro passo para reduzir a conta de energia de uma empresa é
              entender o que está sendo cobrado e verificar se cada cobrança está
              correta. Uma auditoria de fatura analisa todos os itens da conta —
              tarifa de energia, tarifa de demanda, impostos, encargos e multas —
              e identifica cobranças indevidas ou oportunidades de otimização.
            </p>
            <p>
              Na prática, a maioria das empresas que realiza uma auditoria pela
              primeira vez descobre pelo menos uma cobrança incorreta ou uma
              oportunidade de economia que não havia sido identificada anteriormente.
              O custo da auditoria profissional é zero — e a economia começa já
              na primeira fatura corrigida.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Revisão do enquadramento tarifário
            </h2>
            <p>
              O enquadramento tarifário é a classificação da empresa dentro das
              categorias da ANEEL: grupo (A ou B), subgrupo e modalidade tarifária.
              Uma empresa mal enquadrada pode estar pagando tarifas industriais
              sendo ela comercial, ou pagando tarifas comerciais quando poderia
              se beneficiar das tarifas industriais — dependendo do estado e do
              tipo de atividade econômica.
            </p>
            <p>
              Para empresas no Grupo A (média e alta tensão), a escolha entre
              a modalidade Convencional e as modalidades Horossazonais (Verde e
              Azul) pode impactar significativamente o valor da conta. A modalidade
              ideal depende do perfil de consumo: empresas que concentram o
              consumo no período fora de ponta tendem a pagar menos na modalidade
              Horossazonal.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Ajuste da demanda contratada
            </h2>
            <p>
              Empresas atendidas em média tensão (Grupo A) pagam uma tarifa de
              demanda pelo pico de potência contratada, independente do quanto
              efetivamente utilizam. Se a demanda contratada é maior do que a
              demanda medida, a empresa está pagando por potência que não usa.
            </p>
            <p>
              O ajuste da demanda contratada é um processo formal junto à
              distribuidora. Em geral, a empresa pode solicitar a redução ou
              o aumento da demanda contratada dentro dos limites regulatórios.
              Uma análise do histórico de demanda medida nos últimos 12 meses
              ajuda a definir o valor ideal de contratação — suficiente para cobrir
              os picos de consumo sem pagar por folga excessiva.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Verificação do fator de potência
            </h2>
            <p>
              O fator de potência é a relação entre a potência ativa (que realiza
              trabalho) e a potência aparente (total demandada da rede). Empresas
              com equipamentos como motores elétricos, transformadores e ar
              condicionado sem correção de fator de potência tendem a ter um fator
              de potência baixo, o que resulta em multas na conta de energia.
            </p>
            <p>
              A solução técnica é a instalação de bancos de capacitores, que
              compensam a potência reativa e elevam o fator de potência acima do
              mínimo regulatório (0,92). O investimento em correção de fator de
              potência geralmente tem payback rápido, considerando a eliminação
              das multas.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Energia solar por assinatura para empresas
            </h2>
            <p>
              A energia solar por assinatura (geração distribuída remota) é uma
              das formas mais rápidas de reduzir a conta de energia de uma empresa
              sem investimento. Nesse modelo, a empresa recebe créditos de energia
              solar na sua conta mensal, que são descontados automaticamente pela
              distribuidora.
            </p>
            <p>
              Para empresas, a assinatura pode ser configurada para cobrir
              múltiplas unidades consumidoras — lojas, filiais, depósitos — com
              um único contrato. A economia média é de 20% a 30% no valor das
              faturas, sem necessidade de obras, sem imobilização de capital e
              sem interrupção das operações.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Migração para o Mercado Livre de Energia
            </h2>
            <p>
              Empresas com demanda contratada acima de determinados patamares
              (definidos pela ANEEL por resolução anual) têm a opção de migrar
              para o Mercado Livre de Energia, onde negociam diretamente com
              comercializadores e geradores em vez de comprar energia da
              distribuidora local a preços regulados.
            </p>
            <p>
              A migração para o Mercado Livre pode gerar economias significativas
              em cenários de preços favoráveis, mas envolve riscos de mercado e
              contratos de médio e longo prazo. É uma decisão estratégica que
              requer análise cuidadosa do perfil de consumo e das condições do
              mercado de energia.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Eficiência energética: o complemento necessário
            </h2>
            <p>
              As estratégias tarifárias e financeiras reduzem o custo por kWh
              consumido, mas as ações de eficiência energética reduzem o consumo
              total. A combinação das duas abordagens produz os maiores resultados.
              Medidas simples como substituição de iluminação por LED, instalação
              de sensores de presença, otimização de sistemas de ar condicionado
              e gestão de horários de equipamentos de grande porte podem reduzir
              o consumo em 10% a 20% sem impactar a produtividade.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. As estratégias mencionadas
              dependem do perfil de consumo, distribuidora e estado. Consulte um
              especialista para análise específica da sua empresa.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
