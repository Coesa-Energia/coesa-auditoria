import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog — Economia de Energia Elétrica | COESA",
  description:
    "Aprenda como reduzir sua conta de energia, entender impostos, bandeiras tarifárias e identificar cobranças indevidas na sua fatura de luz.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog",
  },
  openGraph: {
    title: "Blog — Economia de Energia Elétrica | COESA",
    description:
      "Aprenda como reduzir sua conta de energia, entender impostos, bandeiras tarifárias e identificar cobranças indevidas na sua fatura de luz.",
    url: "https://auditoria.coesasolar.com.br/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "auditoria-conta-de-energia",
    title: "Auditoria de Conta de Energia: guia completo para identificar cobranças indevidas",
    description:
      "O que é uma auditoria de conta de energia, quais são os 12 erros mais comuns nas faturas de luz, como funciona o processo e qual é o seu direito à devolução dos valores pagos a mais.",
    category: "Guia",
    readingTime: "10 min",
  },
  {
    slug: "icms-conta-de-energia",
    title: "ICMS na Conta de Energia: o que é e como verificar se está correto",
    description:
      "Entenda como o ICMS é calculado na sua fatura de luz, quais são as alíquotas por estado e como identificar se você está pagando mais do que deveria.",
    category: "Impostos",
    readingTime: "7 min",
  },
  {
    slug: "bandeira-tarifaria",
    title: "Bandeira Tarifária: o que significa cada cor e como afeta sua conta",
    description:
      "Saiba como as bandeiras verde, amarela, vermelha e escassez hídrica impactam o valor da sua conta de energia e como se preparar para cada cenário.",
    category: "Tarifa",
    readingTime: "6 min",
  },
  {
    slug: "enquadramento-tarifario",
    title: "Enquadramento Tarifário: como saber se sua empresa está na classe correta",
    description:
      "O enquadramento tarifário errado pode representar centenas de reais a mais por mês. Aprenda a verificar se sua empresa está no grupo e modalidade corretos.",
    category: "Empresas",
    readingTime: "7 min",
  },
  {
    slug: "energia-solar-assinatura",
    title: "Energia Solar por Assinatura: como funciona e quanto você economiza",
    description:
      "Descubra como receber créditos de energia solar na sua conta sem instalar painéis solares, sem obras e sem investimento inicial.",
    category: "Solar",
    readingTime: "7 min",
  },
  {
    slug: "reduzir-conta-energia-empresa",
    title: "Como Reduzir a Conta de Energia da Sua Empresa em até 30%",
    description:
      "Estratégias práticas e legais para empresas reduzirem o custo com energia elétrica, desde a revisão tarifária até o uso de geração distribuída.",
    category: "Empresas",
    readingTime: "7 min",
  },
  {
    slug: "cobrancas-indevidas-energia",
    title: "Cobranças Indevidas na Conta de Energia: como identificar e contestar",
    description:
      "Um guia completo para identificar as cobranças indevidas mais comuns nas faturas de luz e como solicitar a devolução dos valores pagos a mais.",
    category: "Auditoria",
    readingTime: "6 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-4">
              Blog
            </p>
            <h1
              className="text-4xl md:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Economia de energia elétrica
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Entenda como funciona a sua conta de luz, quais impostos incidem,
              como identificar cobranças indevidas e como reduzir seus custos
              com energia de forma legal.
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-6 border border-white/10 rounded-sm hover:border-white/25 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-white/30">·</span>
                  <span className="text-xs text-white/30">{post.readingTime} de leitura</span>
                </div>
                <h2
                  className="text-xl font-medium mb-2 group-hover:text-green-400 transition-colors leading-snug"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-white/55 leading-relaxed">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
