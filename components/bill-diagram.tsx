"use client";

const annotations = [
  {
    id: 1,
    top: "14%",
    left: "65%",
    label: "1",
    title: "Bandeira tarifária",
    description: "Compare com a bandeira oficial ANEEL do período",
    color: "bg-amber-500",
  },
  {
    id: 2,
    top: "31%",
    left: "65%",
    label: "2",
    title: "Alíquota de ICMS",
    description: "Verifique se a alíquota corresponde à sua classe tarifária",
    color: "bg-red-500",
  },
  {
    id: 3,
    top: "48%",
    left: "65%",
    label: "3",
    title: "Leitura: medida ou estimada?",
    description: "Leitura estimada pode cobrar consumo maior do que o real",
    color: "bg-amber-500",
  },
  {
    id: 4,
    top: "63%",
    left: "65%",
    label: "4",
    title: "Créditos de energia solar",
    description: "Devem aparecer com valor negativo na fatura",
    color: "bg-red-500",
  },
  {
    id: 5,
    top: "79%",
    left: "65%",
    label: "5",
    title: "Taxa de iluminação pública",
    description: "CIP/COSIP varia por município — verifique o valor regulado",
    color: "bg-amber-500",
  },
];

export function BillDiagram() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faf8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
            Onde estão os erros
          </p>
          <h2
            className="text-3xl md:text-4xl font-medium text-foreground mb-4"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Os 5 pontos críticos de uma fatura de energia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A maioria das cobranças indevidas está concentrada nestes campos.
            Saber onde olhar é o primeiro passo da auditoria.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="relative">
              <div
                className="relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden font-mono text-xs"
                style={{ minHeight: "420px" }}
              >
                <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                  <span className="font-bold text-sm">DISTRIBUIDORA DE ENERGIA</span>
                  <span className="text-gray-400 text-xs">FATURA DE ENERGIA ELÉTRICA</span>
                </div>

                <div className="p-4 space-y-0">
                  <div className="border-b border-gray-100 pb-3 mb-3">
                    <div className="flex justify-between text-gray-500 text-xs mb-1">
                      <span>NOME DO CLIENTE</span>
                      <span>MÊS DE REFERÊNCIA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-800">••••• •••••••••</span>
                      <span className="text-gray-800">06/2025</span>
                    </div>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-50 relative">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                      <span className="text-gray-600">Bandeira Tarifária — Vermelha P2</span>
                    </div>
                    <span className="font-medium text-gray-800">R$ 28,48</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                      <span className="text-gray-600">ICMS (30,00%)</span>
                    </div>
                    <span className="font-medium text-gray-800">R$ 128,57</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                      <span className="text-gray-600">Consumo — <span className="text-amber-600 font-medium">ESTIMADO</span> — 300 kWh</span>
                    </div>
                    <span className="font-medium text-gray-800">R$ 215,70</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                      <span className="text-gray-600">Créditos Geração Distribuída</span>
                    </div>
                    <span className="font-medium text-red-500">— R$ 0,00</span>
                  </div>

                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">5</span>
                      <span className="text-gray-600">Taxa CIP/COSIP</span>
                    </div>
                    <span className="font-medium text-gray-800">R$ 47,90</span>
                  </div>

                  <div className="flex justify-between pt-4 mt-2 border-t-2 border-gray-200">
                    <span className="font-bold text-gray-800 text-sm">TOTAL A PAGAR</span>
                    <span className="font-bold text-gray-800 text-sm">R$ 420,65</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-3">
                * Fatura ilustrativa. Valores fictícios para fins didáticos.
              </p>
            </div>

            <div className="space-y-4">
              {annotations.map((ann) => (
                <div key={ann.id} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <span
                    className={`w-7 h-7 rounded-full ${ann.color} text-white text-sm flex items-center justify-center font-bold flex-shrink-0 mt-0.5`}
                  >
                    {ann.label}
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-sm">{ann.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{ann.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span>Cobrança possivelmente incorreta</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span>Ponto que merece verificação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
