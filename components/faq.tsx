"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A auditoria é realmente gratuita?",
    a: "Sim, 100% gratuita — sem taxas, sem cadastro obrigatório e sem compromisso. Não cobramos nada para analisar a sua conta de energia, nem durante a auditoria nem depois dela. Nosso modelo de negócio é baseado em resultado: identificamos oportunidades de economia na sua fatura. Se encontrarmos potencial de redução, um consultor COESA apresenta uma proposta personalizada, geralmente envolvendo energia solar por assinatura — um serviço que você só contrata se quiser. Caso a auditoria não encontre nenhuma cobrança indevida ou oportunidade de economia, encerramos a conversa por ali, sem qualquer custo ou pressão. Já auditamos faturas de mais de 3.000 clientes em todo o Brasil. Em média, identificamos economia de 20% a 30% nas contas analisadas. Preencha o formulário de auditoria gratuita e descubra se você também está pagando mais do que deveria.",
  },
  {
    q: "Quais concessionárias são atendidas?",
    a: "Atendemos clientes de todas as distribuidoras de energia reguladas pela ANEEL em todo o território brasileiro. Isso inclui as principais concessionárias do país: CEMIG (Minas Gerais), Enel (São Paulo, Rio de Janeiro, Goiás, Ceará), CPFL (São Paulo e outros estados), Energisa (Minas Gerais, Mato Grosso, Paraíba e outros), Copel (Paraná), Light (Rio de Janeiro), Equatorial (Maranhão, Pará, Piauí, Alagoas, Goiás), Neoenergia (Bahia, Pernambuco), Celesc (Santa Catarina), entre outras. Nossa equipe de consultores tem experiência com a estrutura tarifária de cada distribuidora, o que nos permite identificar cobranças indevidas com precisão, independente da sua localização. Se você não souber qual é a sua distribuidora, basta informar o estado e município no formulário que identificamos para você antes de iniciar a análise.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim, seus dados estão totalmente protegidos. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados, Lei nº 13.709/2018), que estabelece regras claras sobre coleta, armazenamento e uso de informações pessoais. As informações compartilhadas durante a auditoria — como o valor da sua conta de energia e o nome da distribuidora — são utilizadas exclusivamente para a análise da sua fatura de energia elétrica. Não vendemos, alugamos nem compartilhamos seus dados com terceiros sob nenhuma hipótese. Você pode solicitar a exclusão dos seus dados a qualquer momento, conforme garantido pela LGPD. Nosso canal de privacidade está disponível pelo e-mail indicado na nossa Política de Privacidade. A COESA Energia atua no setor energético há mais de 5 anos e o compromisso com a segurança das informações é parte fundamental da nossa operação.",
  },
  {
    q: "O que acontece após a auditoria?",
    a: "Após o envio do formulário, um consultor COESA inicia a análise da sua fatura de energia. Em menos de 24 horas úteis, você recebe o resultado detalhado. Se identificarmos oportunidades de economia — como enquadramento tarifário inadequado, cobranças duplicadas, ICMS calculado incorretamente ou potencial para energia solar por assinatura — o consultor apresenta uma proposta personalizada, sem custo e sem compromisso. A proposta detalha exatamente quanto você pode economizar por mês e como funciona o serviço recomendado. Você analisa com calma e decide se quer prosseguir, sem pressão de tempo. Caso a auditoria não encontre nenhuma irregularidade ou oportunidade relevante, informamos diretamente e encerramos o atendimento. Nosso objetivo é sempre ser transparente: se não houver economia real para você, não vamos sugerir nenhum serviço.",
  },
  {
    q: "Preciso enviar minha fatura?",
    a: "Não é necessário enviar a fatura de energia para a auditoria inicial. Para a primeira análise, basta informar no formulário o valor médio da sua conta de energia elétrica e o nome da distribuidora — por exemplo, CEMIG, Enel ou CPFL. Com essas duas informações já conseguimos identificar os principais pontos de atenção e estimar o potencial de economia para o seu perfil de consumo. Em alguns casos, quando identificamos oportunidades específicas que exigem análise mais detalhada — como verificação de tarifas incorretas, cobranças de demanda contratada ou créditos de energia solar — o consultor pode solicitar uma foto ou PDF da fatura para confirmar os valores. Nesse caso, o consultor combina o envio com você no retorno. Todo o processo é conduzido por um especialista humano, garantindo análise precisa e personalizada.",
  },
  {
    q: "Como funciona o desconto na conta de energia?",
    a: "O desconto na conta de energia é obtido por meio da energia solar por assinatura — também chamada de geração distribuída remota. A COESA instala e opera usinas solares fotovoltaicas, e os créditos de energia gerada são alocados diretamente na sua conta junto à distribuidora. Cada mês, esses créditos são descontados automaticamente da sua fatura, sem que você precise fazer nada. Não é necessário instalar painéis solares no seu imóvel, nem fazer qualquer obra ou investimento inicial. A economia varia conforme o perfil de consumo e a distribuidora, mas em média nossos clientes reduzem entre 20% e 30% no valor da conta de energia. O serviço funciona tanto para residências quanto para empresas. Após a auditoria, o consultor apresenta a proposta, você assina o contrato digitalmente e começa a receber os créditos no prazo definido.",
  },
  {
    q: "Quanto tempo leva para ver o resultado?",
    a: "O processo é rápido e conduzido de forma humanizada. Após enviar o formulário com suas informações — basicamente o valor médio da conta de energia e o nome da distribuidora — um consultor COESA retorna com o resultado da análise em até 24 horas úteis. Durante o atendimento, o consultor explica passo a passo o que foi encontrado: quais pontos da fatura foram verificados, se há cobranças em desacordo com a legislação vigente da ANEEL e qual é o potencial de economia estimado. Se você tiver dúvidas durante o atendimento, pode perguntar diretamente ao consultor. Todo o processo — desde o primeiro contato até a entrega do resultado da auditoria de conta de energia — é conduzido por especialistas da equipe COESA. Nosso horário de atendimento é de segunda a sexta, das 8h às 18h (horário de Brasília).",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Dúvidas
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
