import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | COESA Energia",
  description: "Termos de Uso do serviço de auditoria gratuita de fatura de energia da COESA Energia.",
  robots: { index: true, follow: true },
};

export default function Termos() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
          ← Voltar
        </Link>

        <h1
          className="text-3xl md:text-4xl font-medium text-foreground mb-2 tracking-tight"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Termos de Uso
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: junho de 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              1. Sobre o serviço
            </h2>
            <p>
              A plataforma <strong>auditoria.coesasolar.com.br</strong> é operada pela <strong>COESA Energia</strong> (CNPJ: 54.016.051/0001-75) e oferece um serviço gratuito de auditoria de fatura de energia elétrica. O serviço tem como objetivo identificar cobranças indevidas, enquadramentos tarifários inadequados e oportunidades de economia nas contas de energia dos usuários.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              2. Gratuidade do serviço
            </h2>
            <p>
              A auditoria de conta de energia é prestada gratuitamente. Não há cobrança de qualquer taxa para solicitar, receber ou utilizar o resultado da análise. A COESA Energia pode, ao final da auditoria, apresentar uma proposta comercial referente a serviços de energia solar por assinatura. A aceitação dessa proposta é totalmente opcional e não é condição para a realização da auditoria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              3. Responsabilidades do usuário
            </h2>
            <p>Ao utilizar este serviço, o usuário se compromete a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fornecer informações verídicas sobre o valor da sua conta de energia e distribuidora</li>
              <li>Não utilizar o serviço para fins ilícitos ou fraudulentos</li>
              <li>Não tentar acessar sistemas internos da COESA Energia de forma não autorizada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              4. Limitação de responsabilidade
            </h2>
            <p>
              A auditoria gratuita é baseada nas informações fornecidas pelo usuário e tem caráter consultivo. Os resultados apresentados são estimativas baseadas em dados históricos e na legislação vigente. A COESA Energia não se responsabiliza por decisões tomadas pelo usuário com base exclusivamente no resultado da auditoria, sem análise complementar da fatura original.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              5. Propriedade intelectual
            </h2>
            <p>
              Todo o conteúdo desta plataforma — textos, logotipos, imagens e metodologia de auditoria — é de propriedade da COESA Energia e está protegido pela legislação de direitos autorais. É vedada a reprodução ou uso comercial sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              6. Alterações nos termos
            </h2>
            <p>
              A COESA Energia reserva-se o direito de atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor na data de publicação. O uso continuado do serviço após a publicação de alterações implica na aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              7. Foro
            </h2>
            <p>
              Fica eleito o foro da comarca de Belo Horizonte, Minas Gerais, para dirimir eventuais controvérsias decorrentes destes Termos de Uso, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              8. Contato
            </h2>
            <p>
              Dúvidas sobre estes Termos de Uso: WhatsApp <strong>+55 (31) 93618-5192</strong>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
