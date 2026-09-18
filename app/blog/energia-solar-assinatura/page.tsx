import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Energia Solar por Assinatura: como funciona e quanto você economiza | COESA",
  description:
    "Descubra como receber créditos de energia solar na sua conta sem instalar painéis solares, sem obras e sem investimento inicial.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/energia-solar-assinatura",
  },
  openGraph: {
    title: "Energia Solar por Assinatura: como funciona e quanto você economiza",
    description:
      "Descubra como receber créditos de energia solar na sua conta sem instalar painéis solares, sem obras e sem investimento inicial.",
    url: "https://auditoria.coesasolar.com.br/blog/energia-solar-assinatura",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/energia-solar-assinatura#article",
  headline: "Energia Solar por Assinatura: como funciona e quanto você economiza",
  description:
    "Descubra como receber créditos de energia solar na sua conta sem instalar painéis solares, sem obras e sem investimento inicial.",
  url: "https://auditoria.coesasolar.com.br/blog/energia-solar-assinatura",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/energia-solar-assinatura",
};

export default function EnergiaAssinaturaPage() {
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
                Solar
              </span>
              <span className="text-xs text-white/30">· 7 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Energia Solar por Assinatura: como funciona e quanto você economiza
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Você não precisa instalar painéis solares no seu telhado para pagar
              menos energia. A energia solar por assinatura permite que você receba
              créditos de uma usina solar remota diretamente na sua conta de luz —
              sem obras, sem investimento e sem complicação.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O que é energia solar por assinatura?
            </h2>
            <p>
              A energia solar por assinatura é uma modalidade de geração
              distribuída remota regulamentada pela ANEEL (Resolução Normativa
              482/2012 e atualizada pela Lei 14.300/2022). Nesse modelo, uma
              empresa instala e opera uma usina solar fotovoltaica em um terreno
              próprio, e os créditos de energia gerada são alocados nas contas
              de energia de consumidores cadastrados.
            </p>
            <p>
              Esses créditos são descontados automaticamente na fatura mensal do
              consumidor, diretamente pela distribuidora de energia. O consumidor
              não precisa fazer nenhuma obra, não precisa comprar equipamentos e
              não assume nenhum risco tecnológico ou de manutenção.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como funciona o sistema de créditos de energia solar?
            </h2>
            <p>
              Quando a usina solar gera energia, os kWh produzidos são injetados
              na rede elétrica da distribuidora. Essa energia é contabilizada como
              créditos e atribuída às unidades consumidoras cadastradas no sistema.
              No fim do mês, quando a distribuidora faz a leitura do medidor, os
              créditos disponíveis são deduzidos do consumo faturado.
            </p>
            <p>
              Por exemplo: se você consumiu 400 kWh e tem 300 kWh de créditos
              de energia solar, você paga apenas 100 kWh à distribuidora, além
              das taxas fixas e impostos obrigatórios. A diferença entre o
              que você pagaria sem a energia solar e o que paga com ela representa
              sua economia mensal.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Qual é a economia real com energia solar por assinatura?
            </h2>
            <p>
              A economia varia conforme a distribuidora, a tarifa de energia local
              e a quantidade de créditos alocados. Em média, os consumidores que
              adotam energia solar por assinatura reduzem entre 20% e 30% no valor
              da conta de energia elétrica.
            </p>
            <p>
              É importante entender que a economia não é sobre 100% da conta.
              Existem cobranças na fatura de energia que não são compensadas pelos
              créditos solares — como a Taxa de Iluminação Pública (CIP), o custo
              de disponibilidade (taxa mínima mensal) e alguns encargos setoriais.
              Mesmo assim, para a maioria dos consumidores, a redução é expressiva
              e imediata.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Quem pode contratar energia solar por assinatura?
            </h2>
            <p>
              Praticamente qualquer consumidor de energia elétrica conectado à
              rede da distribuidora pode contratar energia solar por assinatura.
              Isso inclui residências (casas e apartamentos), empresas (comércio,
              indústria, serviços), propriedades rurais e entidades públicas.
            </p>
            <p>
              Não é necessário ser proprietário do imóvel — inquilinos também
              podem contratar o serviço, já que os créditos são alocados diretamente
              na conta de energia associada ao CPF ou CNPJ, não ao endereço. Isso
              significa que mesmo quem mora em condomínio ou aluga um espaço
              comercial pode se beneficiar.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Diferença entre energia solar por assinatura e painel solar instalado
            </h2>
            <p>
              A energia solar instalada no telhado (geração local) e a energia
              solar por assinatura (geração remota) têm a mesma base tecnológica —
              painéis fotovoltaicos — mas modelos de negócio completamente diferentes.
            </p>
            <p>
              Na instalação própria, você compra os equipamentos (custo médio de
              R$ 15.000 a R$ 40.000 para uma residência), assume a responsabilidade
              pela manutenção e precisa aguardar o payback do investimento (em geral
              5 a 8 anos). Na assinatura, não há investimento inicial — você paga
              apenas um valor mensal menor do que o que pagaria à distribuidora.
              Para quem não tem capital para investir ou não é proprietário do
              imóvel, a assinatura é a única opção viável.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como a COESA oferece energia solar por assinatura?
            </h2>
            <p>
              A COESA instala e opera usinas solares fotovoltaicas em terrenos
              próprios. Os créditos de energia gerada são alocados nas contas dos
              clientes que contratam o serviço de assinatura. O processo é
              totalmente regulamentado pela ANEEL e gerenciado em conjunto com
              as distribuidoras locais.
            </p>
            <p>
              A auditoria gratuita de conta de energia é o primeiro passo: o
              consultor analisa sua fatura, identifica o potencial de economia e
              apresenta uma proposta personalizada de assinatura. Você decide se
              quer prosseguir — sem pressão e sem compromisso.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. A legislação de geração
              distribuída é regida pela Lei 14.300/2022 e pelas resoluções
              normativas da ANEEL.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
