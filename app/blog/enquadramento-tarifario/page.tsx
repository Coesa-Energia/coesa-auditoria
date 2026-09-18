import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Enquadramento Tarifário: como saber se sua empresa está na classe correta | COESA",
  description:
    "O enquadramento tarifário errado pode representar centenas de reais a mais por mês. Aprenda a verificar se sua empresa está no grupo e modalidade corretos.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/enquadramento-tarifario",
  },
  openGraph: {
    title: "Enquadramento Tarifário: como saber se sua empresa está na classe correta",
    description:
      "O enquadramento tarifário errado pode representar centenas de reais a mais por mês. Aprenda a verificar se sua empresa está no grupo e modalidade corretos.",
    url: "https://auditoria.coesasolar.com.br/blog/enquadramento-tarifario",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/enquadramento-tarifario#article",
  headline: "Enquadramento Tarifário: como saber se sua empresa está na classe correta",
  description:
    "O enquadramento tarifário errado pode representar centenas de reais a mais por mês. Aprenda a verificar se sua empresa está no grupo e modalidade corretos.",
  url: "https://auditoria.coesasolar.com.br/blog/enquadramento-tarifario",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/enquadramento-tarifario",
};

export default function EnquadramentoPage() {
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
              Enquadramento Tarifário: como saber se sua empresa está na classe correta
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              O enquadramento tarifário determina qual estrutura de preços sua
              empresa paga à distribuidora. Um enquadramento incorreto pode
              resultar em pagamentos excessivos por anos — e um ajuste simples
              pode gerar economia imediata e restituição de valores pagos a mais.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">
            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O que é o enquadramento tarifário?
            </h2>
            <p>
              O enquadramento tarifário é a classificação do consumidor de energia
              elétrica dentro das categorias e subgrupos definidos pela ANEEL. Essa
              classificação determina qual estrutura tarifária será aplicada —
              incluindo o preço por kWh consumido, a tarifa de demanda, os
              impostos e as condições de fornecimento.
            </p>
            <p>
              Os consumidores são divididos em dois grandes grupos: Grupo A
              (alta e média tensão) e Grupo B (baixa tensão). Dentro do Grupo A,
              existem subgrupos que variam conforme a tensão de fornecimento: A1
              (230 kV ou mais), A2 (88 a 138 kV), A3 (69 kV), A3a (30 a 44 kV),
              A4 (2,3 a 25 kV) e AS (subterrâneo). O Grupo B inclui residencial,
              rural, comercial e industrial de pequeno porte.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Por que o enquadramento tarifário afeta tanto o valor da sua conta?
            </h2>
            <p>
              A estrutura tarifária varia significativamente entre os grupos e
              subgrupos. No Grupo A, o consumidor paga separadamente pela energia
              (R$/kWh) e pela demanda (R$/kW), enquanto no Grupo B a tarifa é
              cobrada apenas pelo consumo. Essa diferença pode representar uma
              economia ou um custo extra enorme, dependendo do perfil de consumo
              da empresa.
            </p>
            <p>
              Dentro do Grupo A, existem ainda as modalidades tarifárias Convencional,
              Horária Verde e Horária Azul. Na modalidade Horosazonal, os preços
              variam conforme o horário de utilização da energia — mais caro no
              horário de ponta (geralmente das 18h às 21h) e mais barato fora
              desse horário. Empresas com grande parte do consumo fora do horário
              de ponta se beneficiam dessa modalidade.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Os erros de enquadramento mais comuns
            </h2>
            <p>
              Na prática de auditoria de faturas, os erros de enquadramento
              tarifário mais frequentes são:
            </p>
            <p>
              <strong className="text-white">Classificação como comercial em vez de industrial:</strong> Muitas
              empresas de pequeno e médio porte que realizam atividades industriais
              são classificadas como consumidores comerciais. As tarifas industriais
              costumam ser menores, especialmente em estados que oferecem incentivos
              fiscais ao setor produtivo.
            </p>
            <p>
              <strong className="text-white">Modalidade tarifária inadequada:</strong> Empresas no Grupo A que
              utilizam a modalidade Convencional quando a Horosazonal seria mais
              vantajosa, ou vice-versa, pagam mais do que precisariam. A escolha
              da modalidade ideal depende do perfil de consumo ao longo do dia.
            </p>
            <p>
              <strong className="text-white">Demanda contratada acima do necessário:</strong> Empresas que
              contrataram uma demanda maior do que efetivamente utilizam pagam
              uma tarifa de demanda sobre um valor que não consomem. O ajuste da
              demanda contratada pode gerar economia imediata.
            </p>
            <p>
              <strong className="text-white">Subgrupo tarifário incorreto:</strong> A tensão de fornecimento
              determina o subgrupo do Grupo A. Erros no cadastro ou mudanças na
              tensão de fornecimento sem atualização no contrato podem colocar
              o consumidor no subgrupo errado.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como verificar o enquadramento tarifário da sua empresa?
            </h2>
            <p>
              O ponto de partida é a própria fatura de energia elétrica. Nela
              constam o grupo e subgrupo tarifário, a modalidade tarifária e a
              classe do consumidor. Verifique se essas informações correspondem
              à realidade da sua empresa — atividade econômica, tensão de
              fornecimento e perfil de consumo.
            </p>
            <p>
              Para consumidores do Grupo A, é fundamental analisar o histórico
              de demanda medida versus demanda contratada. Se a demanda medida
              é consistentemente menor do que a contratada, há oportunidade de
              revisão contratual. Se a demanda medida supera frequentemente a
              demanda contratada, a empresa está pagando multas por ultrapassagem.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Quanto pode ser economizado com a correção do enquadramento?
            </h2>
            <p>
              O potencial de economia varia conforme o perfil de consumo, a
              distribuidora e os erros identificados. Em casos de correção de
              modalidade tarifária para Grupo A com alto consumo fora do horário
              de ponta, a redução pode chegar a 20% a 30% da fatura mensal.
            </p>
            <p>
              Além da economia futura, consumidores que foram enquadrados
              incorretamente têm direito à restituição dos valores pagos a mais.
              O prazo para solicitar a revisão retroativa varia conforme a
              distribuidora e a natureza do erro, mas em geral pode abranger
              até 5 anos de cobranças indevidas.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O papel da auditoria na identificação de erros de enquadramento
            </h2>
            <p>
              Uma auditoria profissional de conta de energia analisa o
              enquadramento tarifário como um dos primeiros pontos de verificação.
              O consultor verifica se a classe, o grupo, a modalidade e os demais
              parâmetros estão corretos e calcula o impacto financeiro de eventuais
              ajustes.
            </p>
            <p>
              Esse tipo de análise requer conhecimento técnico da estrutura
              tarifária da distribuidora específica e das normas da ANEEL. Um
              consultor experiente consegue identificar oportunidades que passam
              despercebidas em uma análise leiga da fatura.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. As estruturas tarifárias são
              definidas pela ANEEL e variam conforme a distribuidora. Consulte
              um especialista para análise específica do seu caso.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
