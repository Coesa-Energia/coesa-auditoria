import type { Metadata } from "next";
import { LeadThanks } from "@/components/lead-thanks";

export const metadata: Metadata = {
  title: "Solicitação recebida — auditoria prioritária | COESA Energia",
  description:
    "Sua solicitação de auditoria gratuita de conta de energia foi recebida e entrou na fila prioritária. Um consultor COESA retorna em até 24 horas úteis.",
  // Página de destino do formulário: não deve aparecer na busca nem competir
  // com a landing pelo mesmo termo.
  robots: { index: false, follow: false },
};

export default function MuitoObrigado() {
  return (
    <LeadThanks
      eyebrow="Solicitação recebida"
      title="Sua auditoria entrou na fila prioritária"
      lead="Pelo valor da sua conta, o potencial de economia é relevante. Um consultor COESA já vai começar a análise dos 17 pontos da sua fatura."
      waLabel="Falar com um consultor agora"
      waHint="Atendimento de segunda a sexta, das 8h às 18h (horário de Brasília)"
      nextSteps={[
        "Um consultor COESA analisa sua fatura com as 17 verificações.",
        "Você recebe o diagnóstico em até 24 horas úteis, com o potencial de economia estimado.",
        "Se houver oportunidade de redução, o consultor apresenta uma proposta — sem custo e sem compromisso.",
      ]}
    />
  );
}
