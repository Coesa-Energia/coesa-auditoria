import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auditoria Gratuita de Conta de Luz — Identificamos Cobranças Indevidas | COESA",
  description:
    "Solicite sua auditoria gratuita de conta de energia pelo WhatsApp. Um consultor COESA analisa 17 pontos da sua fatura e identifica cobranças indevidas.",
  metadataBase: new URL("https://auditoria.coesasolar.com.br"),
  alternates: {
    canonical: "https://auditoria.coesasolar.com.br",
    languages: { "pt-BR": "https://auditoria.coesasolar.com.br" },
  },
  openGraph: {
    title: "Sua conta de energia pode estar errada",
    description:
      "Auditoria gratuita de conta de energia pelo WhatsApp. Um consultor COESA analisa 17 pontos da sua fatura e identifica cobranças indevidas.",
    type: "website",
    locale: "pt_BR",
    url: "https://auditoria.coesasolar.com.br",
    siteName: "COESA Energia",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Auditoria Gratuita de Fatura de Energia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua conta de energia pode estar errada",
    description: "Auditoria gratuita de fatura de energia. 17 verificações automáticas.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://auditoria.coesasolar.com.br/#localbusiness",
  name: "COESA Energia — Auditoria de Conta de Luz",
  description:
    "Auditoria gratuita de conta de energia elétrica pelo WhatsApp. Identificamos cobranças indevidas em faturas de luz em todo o Brasil.",
  url: "https://auditoria.coesasolar.com.br",
  telephone: "+55-31-93618-0209",
  email: "contato@coesasolar.com.br",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
    addressRegion: "MG",
    addressLocality: "Belo Horizonte",
  },
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  priceRange: "Gratuito",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://coesasolar.com.br"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://auditoria.coesasolar.com.br/#organization",
  name: "COESA Energia",
  url: "https://auditoria.coesasolar.com.br",
  sameAs: ["https://coesasolar.com.br"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-31-93618-0209",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: "Portuguese",
    contactOption: "TollFree",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://auditoria.coesasolar.com.br/#service",
  name: "Auditoria Gratuita de Fatura de Energia",
  serviceType: "Auditoria de Fatura de Energia Elétrica",
  description:
    "Auditoria gratuita de conta de energia. Um consultor COESA analisa 17 pontos da sua fatura de luz, identifica cobranças indevidas e apresenta oportunidades de economia.",
  provider: {
    "@id": "https://auditoria.coesasolar.com.br/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
    description: "Auditoria 100% gratuita, sem cadastro e sem compromisso",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Verificações da Auditoria",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enquadramento tarifário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bandeiras tarifárias" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ICMS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PIS/COFINS" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Demanda contratada" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fator de potência" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Subgrupo tarifário" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modalidade tarifária" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tributos municipais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energia solar por assinatura" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cobranças duplicadas" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Histórico de consumo" } },
    ],
  },
  url: "https://auditoria.coesasolar.com.br",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://auditoria.coesasolar.com.br/#faq",
  url: "https://auditoria.coesasolar.com.br",
  mainEntity: [
    {
      "@type": "Question",
      name: "A auditoria é realmente gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, 100% gratuita — sem taxas, sem cadastro obrigatório e sem compromisso. Não cobramos nada para analisar a sua conta de energia, nem durante a auditoria nem depois dela. Nosso modelo de negócio é baseado em resultado: identificamos oportunidades de economia na sua fatura. Se encontrarmos potencial de redução, um consultor COESA apresenta uma proposta personalizada, geralmente envolvendo energia solar por assinatura — um serviço que você só contrata se quiser. Caso a auditoria não encontre nenhuma cobrança indevida ou oportunidade de economia, encerramos a conversa por ali, sem qualquer custo ou pressão. Já auditamos faturas de mais de 3.000 clientes em todo o Brasil. Em média, identificamos economia de 20% a 30% nas contas analisadas.",
      },
    },
    {
      "@type": "Question",
      name: "Quais concessionárias são atendidas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos clientes de todas as distribuidoras de energia reguladas pela ANEEL em todo o território brasileiro. Isso inclui as principais concessionárias do país: CEMIG (Minas Gerais), Enel (São Paulo, Rio de Janeiro, Goiás, Ceará), CPFL (São Paulo e outros estados), Energisa (Minas Gerais, Mato Grosso, Paraíba e outros), Copel (Paraná), Light (Rio de Janeiro), Equatorial (Maranhão, Pará, Piauí, Alagoas, Goiás), Neoenergia (Bahia, Pernambuco), Celesc (Santa Catarina), entre outras. Nossa equipe de consultores tem experiência com a estrutura tarifária de cada distribuidora, o que nos permite identificar cobranças indevidas com precisão, independente da sua localização no Brasil.",
      },
    },
    {
      "@type": "Question",
      name: "Meus dados estão seguros?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, seus dados estão totalmente protegidos. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados, Lei nº 13.709/2018). As informações compartilhadas durante a auditoria — como o valor da sua conta de energia e o nome da distribuidora — são utilizadas exclusivamente para a análise da sua fatura. Não vendemos, alugamos nem compartilhamos seus dados com terceiros sob nenhuma hipótese. Você pode solicitar a exclusão dos seus dados a qualquer momento, conforme garantido pela LGPD. A COESA Energia atua no setor energético há mais de 5 anos e o compromisso com a segurança das informações é parte fundamental da nossa operação.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece após a auditoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Após o envio das suas informações pelo WhatsApp, um consultor COESA inicia a análise da sua fatura de energia. Em menos de 24 horas úteis, você recebe o resultado detalhado. Se identificarmos oportunidades de economia — como enquadramento tarifário inadequado, cobranças duplicadas ou ICMS calculado incorretamente — o consultor apresenta uma proposta personalizada, sem custo e sem compromisso. Você analisa com calma e decide se quer prosseguir, sem pressão de tempo. Caso a auditoria não encontre nenhuma irregularidade ou oportunidade relevante, informamos diretamente e encerramos o atendimento.",
      },
    },
    {
      "@type": "Question",
      name: "Preciso enviar minha fatura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não é necessário enviar a fatura de energia para a auditoria inicial. Para a primeira análise, basta informar ao consultor pelo WhatsApp o valor médio da sua conta de energia elétrica e o nome da distribuidora — por exemplo, CEMIG, Enel ou CPFL. Com essas duas informações já conseguimos identificar os principais pontos de atenção e estimar o potencial de economia. Em alguns casos, quando identificamos oportunidades específicas que exigem análise mais detalhada, o consultor pode solicitar uma foto ou PDF da fatura. Nesse caso, o envio é simples e feito diretamente no WhatsApp. Todo o processo é conduzido por um especialista humano.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o desconto na conta de energia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O desconto na conta de energia é obtido por meio da energia solar por assinatura — também chamada de geração distribuída remota. A COESA instala e opera usinas solares fotovoltaicas, e os créditos de energia gerada são alocados diretamente na sua conta junto à distribuidora. Cada mês, esses créditos são descontados automaticamente da sua fatura, sem que você precise fazer nada. Não é necessário instalar painéis solares no seu imóvel, nem fazer qualquer obra ou investimento inicial. A economia varia conforme o perfil de consumo e a distribuidora, mas em média nossos clientes reduzem entre 20% e 30% no valor da conta de energia.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para ter o resultado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O processo é rápido e conduzido de forma humanizada pelo WhatsApp. Após enviar suas informações — basicamente o valor médio da conta de energia e o nome da distribuidora — um consultor COESA retorna com o resultado da análise em até 24 horas úteis. Durante o atendimento, o consultor explica passo a passo o que foi encontrado: quais pontos da fatura foram verificados, se há cobranças em desacordo com a legislação vigente da ANEEL e qual é o potencial de economia estimado. Nosso horário de atendimento é de segunda a sexta, das 8h às 18h (horário de Brasília).",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://auditoria.coesasolar.com.br/#howto",
  name: "Como solicitar uma auditoria gratuita de conta de energia",
  description:
    "Passo a passo para solicitar a auditoria gratuita de conta de energia da COESA pelo WhatsApp e identificar cobranças indevidas na fatura de luz.",
  tool: [
    { "@type": "HowToTool", name: "WhatsApp" },
    { "@type": "HowToTool", name: "Fatura de energia elétrica (opcional)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Clique no botão do WhatsApp",
      text: "Acesse o WhatsApp e envie a mensagem com um clique. Sem cadastro, sem formulários.",
      url: "https://auditoria.coesasolar.com.br/#como-funciona",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Consultor analisa sua fatura",
      text: "Nosso especialista verifica 17 pontos críticos da sua conta de energia gratuitamente, incluindo ICMS, bandeira tarifária, enquadramento e créditos de energia solar.",
      url: "https://auditoria.coesasolar.com.br/#como-funciona",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Receba o resultado",
      text: "Em até 24 horas úteis você recebe o diagnóstico completo. Descubra quanto pode economizar e receba uma proposta personalizada sem compromisso.",
      url: "https://auditoria.coesasolar.com.br/#como-funciona",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GVLL5SL');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GVLL5SL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
