"use client";

import { ChevronDown, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { AUDIT_FORM_ANCHOR } from "@/lib/utils";

export function Hero() {
  const scrollDown = () => {
    document.querySelector("#como-funciona")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#0a0a0a]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1a0f] to-[#0a0a0a]" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20">
        {/* Plain div — H1 visible immediately, no opacity:0 wrapper (LCP fix) */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/80">Auditoria 100% gratuita</span>
          </motion.div>

          {/* H1 static — rendered immediately by server, no animation delay */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight text-white font-medium tracking-tight"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            Sua conta de energia
            <br />
            pode estar errada
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 font-light tracking-wide max-w-2xl mx-auto"
          >
            Solicite uma auditoria de conta de energia gratuita e descubra se
            você está pagando mais do que deveria. Verificamos 17 pontos da sua
            fatura de luz — sem cadastro, sem compromisso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={AUDIT_FORM_ANCHOR}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-lg px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all min-w-[280px]"
            >
              <ClipboardList className="w-6 h-6" />
              Auditar minha fatura grátis
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-sm text-white/40"
          >
            100% grátis · Sem cadastro · Resposta em até 24h
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={scrollDown}
          className="text-white/40 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
