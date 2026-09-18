import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | COESA Energia",
  description: "Política de Privacidade da COESA Energia. Saiba como coletamos, usamos e protegemos suas informações pessoais em conformidade com a LGPD.",
  robots: { index: true, follow: true },
};

export default function Privacidade() {
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
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-10">Última atualização: junho de 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              1. Quem somos
            </h2>
            <p>
              A <strong>COESA Energia</strong> (CNPJ: 54.016.051/0001-75) é responsável pela plataforma de auditoria gratuita de faturas de energia disponível em{" "}
              <strong>auditoria.coesasolar.com.br</strong>. Esta Política de Privacidade descreve como coletamos, usamos e protegemos as suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              2. Dados que coletamos
            </h2>
            <p>Durante o processo de auditoria de conta de energia, coletamos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Valor médio da conta de energia elétrica</li>
              <li>Nome da distribuidora (ex.: CEMIG, Enel, CPFL)</li>
              <li>Nome completo, telefone/WhatsApp e e-mail informados no formulário (para retorno do consultor)</li>
              <li>Dados da fatura de energia (somente quando solicitado para análise detalhada)</li>
            </ul>
            <p className="mt-3">Não coletamos dados sensíveis como CPF, RG, dados bancários ou informações de pagamento nesta plataforma.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              3. Finalidade do tratamento
            </h2>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Realizar a análise da sua fatura de energia e identificar cobranças indevidas</li>
              <li>Entrar em contato pelo WhatsApp para apresentar o resultado da auditoria</li>
              <li>Enviar, quando aplicável, uma proposta personalizada de economia de energia</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              4. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos, alugamos nem compartilhamos suas informações pessoais com terceiros para fins comerciais. Seus dados podem ser acessados apenas por colaboradores da COESA Energia diretamente envolvidos na análise da sua fatura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              5. Retenção de dados
            </h2>
            <p>
              Mantemos seus dados pelo prazo necessário para a prestação do serviço de auditoria. Caso você não se torne cliente COESA, seus dados são eliminados após o encerramento do atendimento, salvo obrigação legal de retenção.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              6. Seus direitos (LGPD)
            </h2>
            <p>Em conformidade com a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Solicitar a correção de dados incompletos ou inexatos</li>
              <li>Solicitar a eliminação dos seus dados pessoais</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              7. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. As informações trocadas pelo WhatsApp são protegidas pela criptografia de ponta a ponta da plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              8. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato pelo WhatsApp: <strong>+55 (31) 93618-5192</strong>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
