import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";

export const metadata: Metadata = {
  title: "Auditoria de Conta de Energia: guia completo para identificar cobranças indevidas | COESA",
  description:
    "Aprenda o que é uma auditoria de conta de energia, quais erros são mais comuns nas faturas de luz, como identificá-los e qual é o seu direito à devolução.",
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia",
  },
  openGraph: {
    title: "Auditoria de Conta de Energia: guia completo para identificar cobranças indevidas",
    description:
      "Aprenda o que é uma auditoria de conta de energia, quais erros são mais comuns nas faturas de luz, como identificá-los e qual é o seu direito à devolução.",
    url: "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia#article",
  headline: "Auditoria de Conta de Energia: guia completo para identificar cobranças indevidas",
  description:
    "Aprenda o que é uma auditoria de conta de energia, quais erros são mais comuns nas faturas de luz, como identificá-los e qual é o seu direito à devolução.",
  url: "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia",
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  author: { "@type": "Organization", name: "COESA Energia" },
  publisher: {
    "@type": "Organization",
    name: "COESA Energia",
    url: "https://auditoria.coesasolar.com.br",
  },
  mainEntityOfPage: "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia",
  about: [
    { "@type": "Thing", name: "Auditoria de conta de energia elétrica" },
    { "@type": "Thing", name: "Cobranças indevidas na fatura de luz" },
    { "@type": "Thing", name: "ICMS energia elétrica" },
    { "@type": "Thing", name: "ANEEL regulação" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é uma auditoria de conta de energia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uma auditoria de conta de energia é a análise técnica e sistemática de todos os itens cobrados na fatura de energia elétrica. O objetivo é identificar cobranças indevidas — como ICMS com alíquota incorreta, bandeira tarifária errada, leitura estimada acima do consumo real, créditos de energia solar não aplicados, demanda contratada acima do necessário e taxa de iluminação pública com valor irregular. A auditoria é realizada por um especialista que conhece a estrutura tarifária da distribuidora e as normas da ANEEL, identificando discrepâncias que passam despercebidas na leitura comum da fatura.",
      },
    },
    {
      "@type": "Question",
      name: "Como identificar cobranças indevidas na conta de energia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para identificar cobranças indevidas na conta de energia, verifique: (1) se a bandeira tarifária cobrada corresponde à bandeira oficial ANEEL do período; (2) se a alíquota de ICMS está correta para sua classe de consumidor e estado; (3) se a leitura é medida ou estimada — leituras estimadas podem cobrar consumo maior do que o real; (4) se créditos de energia solar aparecem na fatura caso você tenha geração distribuída; (5) se a taxa de iluminação pública (CIP) corresponde ao valor regulado pelo seu município. Para uma verificação completa dos 17 pontos auditáveis, solicite uma auditoria gratuita pelo formulário online.",
      },
    },
    {
      "@type": "Question",
      name: "Tenho direito à devolução por cobrança indevida na conta de luz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A Resolução Normativa ANEEL nº 1.000/2021 garante ao consumidor o direito à restituição de valores cobrados indevidamente. O prazo para solicitar a revisão retroativa é de 5 anos a contar da data de cada cobrança. Os valores devolvidos são corrigidos monetariamente. O processo começa com uma reclamação formal à distribuidora, que tem prazo regulatório para responder. Se não resolver, você pode recorrer à ANEEL pelo portal consumidor.aneel.gov.br.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa uma auditoria de conta de energia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A auditoria de conta de energia da COESA é 100% gratuita. Não há custo para a análise, não é necessário cadastro e não há compromisso. O modelo de negócio da COESA é baseado nos serviços adicionais — como energia solar por assinatura — que são apresentados quando a auditoria identifica potencial de economia. Você decide se quer contratar ou não, sem pressão.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://auditoria.coesasolar.com.br/blog/auditoria-conta-de-energia#howto",
  name: "Como fazer uma auditoria de conta de energia",
  description:
    "Passo a passo para solicitar uma auditoria de conta de energia elétrica e identificar cobranças indevidas na sua fatura de luz.",
  step: [
    {
      "@type": "HowToStep",
      name: "Reúna suas últimas faturas de energia",
      text: "Separe as faturas dos últimos 3 a 6 meses. Você pode acessá-las pelo aplicativo ou site da distribuidora, ou solicitar a segunda via. Não é obrigatório enviar a fatura para iniciar a auditoria COESA — mas ter em mãos ajuda.",
    },
    {
      "@type": "HowToStep",
      name: "Identifique os pontos de atenção",
      text: "Verifique os 5 pontos críticos na fatura: bandeira tarifária, alíquota de ICMS, tipo de leitura (medida ou estimada), créditos de geração solar e taxa de iluminação pública. Qualquer anomalia é sinal de que uma auditoria é necessária.",
    },
    {
      "@type": "HowToStep",
      name: "Preencha o formulário de auditoria gratuita",
      text: "Preencha o formulário com o valor médio da sua conta e o nome da distribuidora. Um consultor COESA analisa sua situação com 17 verificações e retorna com o resultado em até 24 horas úteis.",
    },
    {
      "@type": "HowToStep",
      name: "Receba o resultado e decida o próximo passo",
      text: "Se identificarmos cobranças indevidas, o consultor apresenta o diagnóstico completo e as opções disponíveis — desde a contestação junto à distribuidora até propostas de redução permanente da fatura. Você decide como prosseguir, sem compromisso.",
    },
  ],
  tool: [
    { "@type": "HowToTool", name: "Formulário de auditoria online" },
    { "@type": "HowToTool", name: "Fatura de energia elétrica (opcional)" },
  ],
};

export default function AuditoriaGuiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Guia completo
              </span>
              <span className="text-xs text-white/30">· 10 min de leitura</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Auditoria de Conta de Energia: guia completo para identificar cobranças indevidas
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Milhões de brasileiros pagam mais do que deveriam na conta de energia
              todos os meses — sem saber. Uma auditoria de conta de energia é o
              processo técnico que examina cada item da fatura e identifica onde
              estão as cobranças incorretas. Este guia explica como funciona, quais
              erros são mais comuns e como você pode recuperar o que foi pago a mais.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80 leading-relaxed">

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              O que é uma auditoria de conta de energia?
            </h2>
            <p>
              Uma auditoria de conta de energia é a análise técnica e sistemática
              de todos os itens cobrados na sua fatura de energia elétrica. O objetivo
              é comparar o que está sendo cobrado com o que deveria ser cobrado segundo
              a legislação vigente da ANEEL (Agência Nacional de Energia Elétrica) e
              o contrato de fornecimento da distribuidora.
            </p>
            <p>
              A fatura de energia elétrica no Brasil é uma das contas mais complexas
              que um consumidor recebe. Ela contém tarifas de energia, tarifas de
              distribuição, impostos federais (PIS/COFINS), impostos estaduais (ICMS),
              encargos setoriais, taxas municipais (CIP/COSIP), cobranças de demanda
              (para consumidores comerciais e industriais) e, nos casos de geração
              distribuída, compensação de créditos de energia solar. Qualquer um desses
              itens pode conter um erro — e esses erros, multiplicados por meses ou
              anos, somam valores expressivos.
            </p>
            <p>
              Uma auditoria profissional de conta de energia cobre todos esses pontos
              com base no conhecimento técnico da estrutura tarifária de cada
              distribuidora e nas normas regulatórias da ANEEL. Não se trata de uma
              leitura superficial da fatura, mas de uma análise sistemática que
              compara cada cobrança com o valor correto.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Por que cobranças indevidas são tão comuns?
            </h2>
            <p>
              As distribuidoras de energia processam dezenas de milhões de faturas
              por mês usando sistemas automatizados que aplicam regras tarifárias
              extremamente complexas. Qualquer falha no cadastro do consumidor,
              atualização de tarifa mal implementada, erro de leitura do medidor ou
              divergência no sistema de compensação de créditos pode resultar em
              cobrança incorreta.
            </p>
            <p>
              O problema é agravado pelo fato de que a maioria dos consumidores
              — tanto residenciais quanto comerciais — não tem o conhecimento técnico
              necessário para identificar erros em uma fatura. O ICMS, por exemplo,
              é calculado de forma peculiar (cálculo &ldquo;por dentro&rdquo;, sobre si mesmo),
              o que torna quase impossível verificar manualmente se o valor está correto
              sem conhecer a legislação estadual e a estrutura tarifária específica
              da distribuidora.
            </p>
            <p>
              Estudos e levantamentos de auditorias realizadas no setor indicam que
              entre 60% e 73% das faturas analisadas apresentam algum tipo de
              irregularidade ou oportunidade de redução. A auditoria de conta de
              energia existe justamente para identificar e corrigir esse problema.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Os 12 erros mais comuns identificados em auditorias de conta de energia
            </h2>
            <p>
              Com base na experiência de auditoria da COESA com mais de 3.000
              clientes em todo o Brasil, estes são os erros mais frequentes:
            </p>
            <p>
              <strong className="text-white">1. Enquadramento tarifário incorreto:</strong> O
              consumidor está na classe errada (residencial sendo cobrado como comercial,
              ou comercial sendo cobrado como industrial) ou no grupo errado (Grupo B
              quando deveria estar no Grupo A). Este erro afeta a tarifa base e os impostos
              de forma multiplicada.
            </p>
            <p>
              <strong className="text-white">2. ICMS com alíquota incorreta:</strong> A alíquota
              de ICMS sobre energia elétrica varia por estado e por classe de consumidor.
              Aplicar a alíquota errada — ou incluir itens isentos na base de cálculo —
              resulta em pagamento excessivo de imposto.
            </p>
            <p>
              <strong className="text-white">3. Bandeira tarifária divergente:</strong> A bandeira
              aplicada na fatura não corresponde à bandeira oficial ANEEL do período de
              referência. Erros de sistema ou faturamentos retroativos causam esse problema.
            </p>
            <p>
              <strong className="text-white">4. Leitura estimada acima do consumo real:</strong> Quando
              o medidor não pode ser lido, a distribuidora usa uma estimativa baseada no
              histórico. Estimativas incorretas cobram consumo que não aconteceu.
            </p>
            <p>
              <strong className="text-white">5. Créditos de geração solar não aplicados:</strong> Consumidores
              com painéis solares ou assinatura de energia solar têm créditos que devem
              ser descontados mensalmente pela distribuidora. Quando isso não ocorre, o
              consumidor paga pelo consumo total sem o abatimento devido.
            </p>
            <p>
              <strong className="text-white">6. Taxa de iluminação pública (CIP/COSIP) irregular:</strong> O
              valor da CIP é definido por cada município e deve respeitar a regulamentação
              local. Consumidores que mudam de endereço ou cujo cadastro está incorreto
              podem ser cobrados com uma CIP incompatível com seu endereço real.
            </p>
            <p>
              <strong className="text-white">7. Demanda contratada acima do necessário:</strong> Empresas
              do Grupo A pagam pela demanda contratada independente do consumo. Quando a
              demanda contratada é maior do que a demanda máxima utilizada, há desperdício
              de recursos.
            </p>
            <p>
              <strong className="text-white">8. Fator de potência com multas indevidas:</strong> Equipamentos
              sem correção de fator de potência geram multas na conta. Em alguns casos, as
              multas são aplicadas mesmo quando o fator de potência está dentro do limite
              regulatório.
            </p>
            <p>
              <strong className="text-white">9. Modalidade tarifária inadequada:</strong> Empresas no Grupo A
              pagando na modalidade convencional quando a horossazonal seria mais vantajosa
              (ou vice-versa). A escolha incorreta pode custar centenas de reais por mês.
            </p>
            <p>
              <strong className="text-white">10. PIS/COFINS com alíquotas desatualizadas:</strong> As alíquotas
              de PIS/COFINS sobre energia elétrica variam conforme a legislação federal em
              vigor. Distribuidoras com sistemas desatualizados podem aplicar alíquotas
              antigas.
            </p>
            <p>
              <strong className="text-white">11. Multas e juros de mora calculados incorretamente:</strong> Juros
              acima do limite regulatório ou multas aplicadas sobre pagamentos feitos dentro
              do prazo são cobranças indevidas.
            </p>
            <p>
              <strong className="text-white">12. Cobranças duplicadas ou itens não reconhecidos:</strong> Itens
              faturados duas vezes em períodos de troca de sistema ou cobranças de serviços
              não contratados.
            </p>

            <BlogCta />

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Como funciona uma auditoria de conta de energia passo a passo
            </h2>
            <p>
              Uma auditoria profissional de conta de energia segue uma metodologia
              estruturada. Veja como funciona o processo na COESA:
            </p>
            <p>
              <strong className="text-white">Passo 1 — Coleta de informações:</strong> O consultor
              solicita dados básicos: o valor médio da conta de energia e o nome da
              distribuidora. Não é necessário enviar a fatura para o diagnóstico inicial —
              embora o envio permita uma análise mais detalhada em casos específicos.
            </p>
            <p>
              <strong className="text-white">Passo 2 — Verificação dos 17 pontos:</strong> O consultor
              analisa sistematicamente cada ponto de auditoria: enquadramento tarifário,
              bandeira tarifária, ICMS, PIS/COFINS, consumo faturado, demanda contratada,
              fator de potência, subgrupo tarifário, modalidade tarifária, CIP/COSIP,
              créditos de geração solar, cobranças duplicadas, histórico de consumo, multas,
              juros, encargos setoriais e tarifas de ultrapassagem.
            </p>
            <p>
              <strong className="text-white">Passo 3 — Diagnóstico e estimativa de economia:</strong> Com
              os pontos de irregularidade identificados, o consultor calcula o potencial de
              economia e o valor passível de restituição. O resultado é apresentado de forma
              clara e transparente.
            </p>
            <p>
              <strong className="text-white">Passo 4 — Proposta e decisão:</strong> Se houver
              oportunidade de redução, o consultor apresenta as opções disponíveis. Você
              analisa com calma e decide sem pressão. A auditoria em si nunca gera custo,
              independente do resultado.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Qual é o meu direito à devolução por cobrança indevida?
            </h2>
            <p>
              A Resolução Normativa ANEEL nº 1.000/2021, que consolidou as normas de
              qualidade do serviço de energia elétrica no Brasil, garante ao consumidor
              o direito à restituição de valores cobrados indevidamente. Este é um direito
              legalmente assegurado, não uma concessão da distribuidora.
            </p>
            <p>
              O prazo para solicitar a revisão retroativa é de <strong className="text-white">5 anos</strong> a
              contar da data de cada cobrança indevida. Isso significa que uma auditoria
              realizada hoje pode recuperar valores cobrados incorretamente nos últimos
              5 anos. Os valores devem ser corrigidos monetariamente pelo índice previsto
              no contrato de concessão da distribuidora.
            </p>
            <p>
              O processo começa com uma reclamação formal à distribuidora. A distribuidora
              tem prazo regulatório para analisar e responder. Se não resolver ou não
              reconhecer a cobrança indevida, o consumidor pode:
            </p>
            <p>
              — Registrar uma reclamação na ANEEL pelo portal consumidor.aneel.gov.br;<br />
              — Acionar a ouvidoria da distribuidora;<br />
              — Recorrer ao PROCON do seu estado;<br />
              — Em casos de valores significativos, entrar com ação judicial.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Auditoria de conta de energia para empresas
            </h2>
            <p>
              Para empresas, o impacto financeiro das cobranças indevidas é amplificado
              pelo volume de consumo. Uma empresa que paga R$ 5.000 por mês em energia
              elétrica e tem um enquadramento tarifário incorreto pode estar desperdiçando
              R$ 15.000 a R$ 18.000 por ano — além do potencial de recuperação retroativa
              de 5 anos.
            </p>
            <p>
              Empresas atendidas em média tensão (Grupo A) têm ainda mais pontos auditáveis:
              demanda contratada, modalidade tarifária, fator de potência e a possibilidade
              de migração para o Mercado Livre de Energia. Uma auditoria completa para esse
              perfil de consumidor analisa todos esses fatores e apresenta um mapa completo
              das oportunidades de redução.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Por que fazer uma auditoria de conta de energia agora?
            </h2>
            <p>
              O setor elétrico brasileiro passou por mudanças regulatórias significativas
              nos últimos anos: a consolidação das normas pela Resolução Normativa ANEEL
              nº 1.000/2021, a regulamentação da geração distribuída pela Lei 14.300/2022,
              e as revisões tarifárias periódicas das distribuidoras. Cada mudança regulatória
              é uma oportunidade para cobranças inadequadas — e quanto mais tempo passa sem
              revisão, maior o valor acumulado.
            </p>
            <p>
              Além disso, o prazo de 5 anos para solicitação retroativa é um relógio que
              está correndo. Cobranças indevidas de 2020 só podem ser contestadas até 2025.
              Uma auditoria realizada hoje captura o maior janela retroativa possível.
            </p>

            <h2 className="text-2xl font-medium text-white mt-10 mb-4" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Perguntas frequentes sobre auditoria de conta de energia
            </h2>
            <p>
              <strong className="text-white">A auditoria de conta de energia é gratuita?</strong><br />
              A auditoria da COESA é 100% gratuita, sem cadastro e sem compromisso. Não há
              custo em nenhuma etapa do processo de análise.
            </p>
            <p>
              <strong className="text-white">Quanto tempo leva para ter o resultado?</strong><br />
              O consultor retorna com o resultado da análise em até 24 horas úteis após o
              envio do formulário.
            </p>
            <p>
              <strong className="text-white">É necessário enviar a fatura?</strong><br />
              Não para a análise inicial. O consultor pode iniciar com o valor médio da
              conta e o nome da distribuidora. A fatura pode ser solicitada em casos
              específicos que exijam análise mais detalhada.
            </p>
            <p>
              <strong className="text-white">Quais distribuidoras são atendidas?</strong><br />
              Todas as distribuidoras reguladas pela ANEEL em território nacional: CEMIG,
              Enel, CPFL, Energisa, Copel, Light, Equatorial, Neoenergia, Celesc, entre
              outras.
            </p>
          </div>

          <BlogCta />

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-xs text-white/30">
              Artigo atualizado em junho de 2025. As normas regulatórias mencionadas
              estão em vigor na data de publicação. Consulte a ANEEL para verificar
              atualizações mais recentes.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
