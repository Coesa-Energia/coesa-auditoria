import type { Metadata } from "next";
import { LeadThanks } from "@/components/lead-thanks";

export const metadata: Metadata = {
  title: "Solicitação recebida | COESA Energia",
  description:
    "Sua solicitação de auditoria gratuita de conta de energia foi recebida. Um consultor COESA retorna em até 24 horas úteis.",
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <LeadThanks
      eyebrow="Solicitação recebida"
      title="Recebemos sua solicitação de auditoria"
      lead="Um consultor COESA vai verificar os dados da sua conta de energia e retornar com o resultado. A auditoria é gratuita e não gera compromisso."
      waLabel="Falar com um consultor no WhatsApp"
      waHint="Atendimento de segunda a sexta, das 8h às 18h (horário de Brasília)"
      nextSteps={[
        "Um consultor COESA revisa os dados que você enviou.",
        "Você recebe o retorno em até 24 horas úteis.",
        "Se identificarmos cobranças indevidas ou economia possível, explicamos exatamente o que foi encontrado.",
      ]}
    />
  );
}
