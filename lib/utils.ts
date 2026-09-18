import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function parseCurrencyToNumber(value: string): number {
  const cleaned = value.replace(/[^\d,]/g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
}

// Todo CTA anterior ao lead aponta para o formulário da página inicial — o
// lead preenche o formulário antes de qualquer contato.
export const AUDIT_FORM_ANCHOR = "/#auditoria";

// WhatsApp só depois do formulário enviado: usado apenas nas páginas de
// agradecimento (/obrigado e /muito-obrigado). O nome é propositalmente
// explícito para que nenhum CTA de topo de funil volte a apontar para cá.
export const WHATSAPP_POS_LEAD_URL =
  "https://wa.me/5531936185192?text=Ol%C3%A1%2C%20acabei%20de%20solicitar%20a%20auditoria%20gratuita%20da%20minha%20conta%20de%20luz.";
