import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16">
      <div className="container mx-auto px-4">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/images/logo-coesa-white.png"
              alt="COESA Energia"
              width={100}
              height={33}
              className="h-7 w-auto mb-4"
            />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Auditoria gratuita de conta de energia. Identificamos
              cobranças indevidas em faturas de luz em todo o Brasil.
            </p>
            <p className="text-xs text-white/25 mt-4">CNPJ: 54.016.051/0001-75</p>
          </div>

          {/* Column 2 — Auditoria */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Auditoria
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="/#auditoria" className="hover:text-white transition-colors">
                  Iniciar Auditoria Gratuita
                </a>
              </li>
              <li>
                <a href="/#verificacoes" className="hover:text-white transition-colors">
                  O que verificamos
                </a>
              </li>
              <li>
                <a href="/#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  Dúvidas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Recursos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Recursos
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog — Economia de Energia
                </a>
              </li>
              <li>
                <a
                  href="/como-verificar-conta-de-energia"
                  className="hover:text-white transition-colors"
                >
                  Como verificar sua conta de energia
                </a>
              </li>
              <li>
                <a href="/distribuidoras" className="hover:text-white transition-colors">
                  Distribuidoras atendidas
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Authority bar */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/30">
            <span>Auditoria baseada na Resolução Normativa ANEEL nº 1.000/2021</span>
            <span className="hidden sm:inline text-white/15">·</span>
            <span>Lei Geral de Proteção de Dados — Lei nº 13.709/2018</span>
            <span className="hidden sm:inline text-white/15">·</span>
            <a
              href="https://www.reclameaqui.com.br/busca/?q=coesa+energia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              Buscar COESA no Reclame Aqui
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} COESA Energia — CNPJ 54.016.051/0001-75. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20">Energia regulada pela ANEEL · Todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
