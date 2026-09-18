"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency, AUDIT_FORM_ANCHOR } from "@/lib/utils";

const verificacoes = [
  "Verificando tarifa aplicada...",
  "Conferindo ICMS e PIS/COFINS...",
  "Analisando bandeira tarifária...",
  "Verificando consumo faturado...",
  "Checando créditos de energia...",
  "Avaliando iluminação pública...",
  "Analisando demanda contratada...",
  "Conferindo classe tarifária...",
  "Verificando multas e juros...",
  "Finalizando auditoria...",
];

export function ResultadoContent() {
  const searchParams = useSearchParams();
  const nome = searchParams.get("nome") || "Cliente";
  const economia = parseFloat(searchParams.get("economia") || "0");
  const pct = parseInt(searchParams.get("pct") || "30");

  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep < verificacoes.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setIsComplete(true), 500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const progress = Math.min((currentStep / verificacoes.length) * 100, 100);

  return (
    <section className="min-h-screen bg-[#0a0a0a] flex items-center justify-center pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-white"
            >
              <h2
                className="text-2xl md:text-3xl font-medium mb-8"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Analisando sua fatura...
              </h2>

              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-2 mb-8">
                <motion.div
                  className="bg-green-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Current step */}
              <div className="space-y-2 text-left max-w-sm mx-auto">
                {verificacoes.slice(0, currentStep + 1).map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    {i < currentStep ? (
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-white/30 rounded-full animate-pulse flex-shrink-0" />
                    )}
                    <span className={i < currentStep ? "text-white/60" : "text-white"}>
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              {/* Success icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-400/20 mb-8"
              >
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </motion.div>

              <h2
                className="text-3xl md:text-4xl font-medium mb-4"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                Auditoria concluída, {nome}!
              </h2>

              <p className="text-lg text-white/70 mb-10 max-w-lg mx-auto">
                Identificamos uma oportunidade de economia de até{" "}
                <span className="text-green-400 font-medium">{pct}%</span> na
                sua conta de energia.
              </p>

              {/* Economia card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-lg p-8 mb-10"
              >
                <p className="text-sm text-white/50 mb-2">
                  Economia estimada por mês
                </p>
                <p
                  className="text-4xl md:text-5xl font-medium text-green-400"
                  style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                  {formatCurrency(economia)}
                </p>
                <p className="text-sm text-white/40 mt-2">
                  Baseado no valor informado da sua fatura
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <a href={AUDIT_FORM_ANCHOR}>
                  <Button variant="landing" size="xl" className="w-full sm:w-auto min-w-[300px]">
                    <ClipboardList className="w-5 h-5 mr-2" />
                    Solicitar auditoria gratuita
                  </Button>
                </a>

                <p className="text-sm text-white/40">
                  Preencha o formulário e um consultor retorna em até 24h úteis
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
