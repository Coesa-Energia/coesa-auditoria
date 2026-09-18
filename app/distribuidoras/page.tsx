import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { distribuidoras } from "@/lib/distribuidoras";

export const metadata: Metadata = {
  title: "Distribuidoras de Energia Atendidas — Auditoria em Todo o Brasil | COESA",
  description:
    "A COESA realiza auditorias gratuitas de conta de energia para clientes de todas as distribuidoras reguladas pela ANEEL. Consulte a lista de distribuidoras atendidas.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/distribuidoras",
  },
  openGraph: {
    title: "Distribuidoras de Energia Atendidas — Auditoria em Todo o Brasil | COESA",
    description:
      "A COESA realiza auditorias gratuitas de conta de energia para clientes de todas as distribuidoras reguladas pela ANEEL.",
    url: "https://auditoria.coesasolar.com.br/distribuidoras",
    type: "website",
  },
};

export default function DistribuidorasPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-4">
              Cobertura nacional
            </p>
            <h1
              className="text-4xl md:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Distribuidoras atendidas
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Realizamos auditorias gratuitas de conta de energia para clientes
              de todas as distribuidoras reguladas pela ANEEL em território
              nacional. Nossos consultores têm experiência com a estrutura
              tarifária de cada distribuidora.
            </p>
          </div>

          <div className="grid gap-4">
            {distribuidoras.map((dist) => (
              <Link
                key={dist.slug}
                href={`/distribuidoras/${dist.slug}`}
                className="group flex items-center justify-between p-6 border border-white/10 rounded-sm hover:border-white/25 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2
                      className="text-lg font-medium group-hover:text-green-400 transition-colors"
                      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                    >
                      {dist.shortName}
                    </h2>
                    <span className="text-xs text-white/30 font-normal hidden sm:inline">
                      {dist.region}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">{dist.state}</p>
                </div>
                <span className="text-xs text-green-400 font-medium whitespace-nowrap ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver detalhes →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-8 border border-white/10 rounded-sm text-center">
            <p className="text-white/60 mb-2">
              Não encontrou sua distribuidora?
            </p>
            <p className="text-sm text-white/40 mb-6">
              Atendemos clientes de todas as distribuidoras reguladas pela ANEEL,
              inclusive aquelas não listadas acima.
            </p>
            <Link
              href="/#auditoria"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              Solicitar auditoria gratuita →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
