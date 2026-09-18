import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";
import { distribuidoras, getDistribuidora } from "@/lib/distribuidoras";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return distribuidoras.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dist = getDistribuidora(params.slug);
  if (!dist) return {};

  const title = `Auditoria de Conta de Energia ${dist.shortName} — Gratuita e Online | COESA`;
  const description = `Cliente ${dist.shortName}? Solicite uma auditoria gratuita de conta de energia pelo formulário online. Um consultor COESA verifica 17 pontos da sua fatura ${dist.shortName} e identifica cobranças indevidas.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://auditoria.coesasolar.com.br/distribuidoras/${dist.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://auditoria.coesasolar.com.br/distribuidoras/${dist.slug}`,
      type: "website",
    },
  };
}

export default function DistribuidoraPage({ params }: Props) {
  const dist = getDistribuidora(params.slug);
  if (!dist) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Auditoria Gratuita de Conta de Energia ${dist.shortName}`,
    description: `Auditoria gratuita de conta de energia para clientes da ${dist.shortName}. Um consultor COESA analisa 17 pontos da sua fatura e identifica cobranças indevidas.`,
    provider: {
      "@type": "Organization",
      name: "COESA Energia",
      url: "https://auditoria.coesasolar.com.br",
    },
    areaServed: dist.states.map((s) => ({
      "@type": "AdministrativeArea",
      name: s,
    })),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      description: "Auditoria 100% gratuita, sem cadastro e sem compromisso",
    },
    url: `https://auditoria.coesasolar.com.br/distribuidoras/${dist.slug}`,
  };

  const auditPoints = [
    "Enquadramento tarifário (grupo, subgrupo e classe)",
    "Modalidade tarifária (convencional ou horossazonal)",
    "ICMS — alíquota e base de cálculo",
    "PIS/COFINS — alíquotas vigentes",
    "Bandeira tarifária aplicada",
    "Consumo faturado versus consumo real",
    "Taxa de iluminação pública (CIP)",
    "Demanda contratada e ultrapassagem",
    "Fator de potência e multas",
    "Cobranças duplicadas ou itens não reconhecidos",
    "Histórico de consumo (anomalias e estimativas)",
    "Créditos de energia solar não aplicados",
    "Multas e juros de mora calculados corretamente",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-10">
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-4">
              {dist.region}
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Auditoria gratuita de conta de energia {dist.shortName}
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Você é cliente da {dist.shortName} e quer saber se está pagando
              tudo corretamente na sua fatura de energia? Nossa auditoria
              gratuita verifica 17 pontos da sua conta e identifica cobranças
              indevidas — sem cadastro e sem compromisso.
            </p>
          </header>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2
                className="text-2xl font-medium text-white mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Sobre a {dist.shortName}
              </h2>
              <p>{dist.description}</p>
              <p className="mt-4">
                A COESA tem experiência em auditar faturas da {dist.shortName}
                e conhece em detalhes a estrutura tarifária aplicada aos
                consumidores de {dist.state}. Nossa equipe sabe quais são os
                erros mais frequentes nas faturas dessa distribuidora e como
                identificá-los rapidamente.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-medium text-white mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                O que verificamos na sua conta {dist.shortName}
              </h2>
              <p className="mb-6">
                Nossa auditoria de conta de energia cobre 17 pontos de
                verificação na sua fatura {dist.shortName}:
              </p>
              <ul className="space-y-3">
                {auditPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-green-400/20 flex-shrink-0 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <BlogCta />

            <section>
              <h2
                className="text-2xl font-medium text-white mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Cobranças indevidas mais frequentes na {dist.shortName}
              </h2>
              <p>
                Com base nas auditorias já realizadas em faturas da{" "}
                {dist.shortName}, as cobranças indevidas mais frequentes são:
                erros no enquadramento tarifário — especialmente para empresas
                que foram classificadas na categoria errada — ICMS aplicado com
                alíquota ou base de cálculo incorreta, bandeira tarifária
                divergente do período de faturamento e Taxa de Iluminação
                Pública (CIP) calculada acima do valor regulado para o município.
              </p>
              <p className="mt-4">
                Em média, as faturas {dist.shortName} auditadas pela COESA
                apresentam oportunidades de economia de 20% a 30%. Em alguns
                casos — especialmente para consumidores do Grupo A com demanda
                mal dimensionada — a economia pode ser ainda maior.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-medium text-white mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Como solicitar a auditoria de conta {dist.shortName}
              </h2>
              <p>
                O processo é simples e totalmente online. Você não
                precisa enviar nenhum documento — basta informar o valor médio
                da sua conta de energia e que você é cliente da {dist.shortName}.
                Um consultor COESA inicia a análise e retorna com o resultado em
                até 24 horas úteis.
              </p>
              <p className="mt-4">
                Se identificarmos oportunidades de economia, o consultor apresenta
                uma proposta personalizada. Você decide se quer prosseguir, sem
                pressão e sem prazo. A auditoria em si é sempre 100% gratuita.
              </p>
            </section>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
            <a
              href="/distribuidoras"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              ← Todas as distribuidoras
            </a>
            <p className="text-xs text-white/25">
              Informações atualizadas em junho de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
