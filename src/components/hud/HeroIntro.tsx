import { Sparkles } from "lucide-react";

/**
 * Hero copy shown as the content of the INICIO tab: status chip, the large
 * display headline and the supporting line. Lives inside the scrollable panel
 * so it no longer reserves fixed height in the card.
 */
export function HeroIntro() {
  return (
    <div className="pb-2">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-holo-mint/25 bg-holo-mint/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-holo-mint/90">
        <Sparkles className="h-3 w-3" />
        Comité activo
      </span>
      <h1 className="mt-4 font-display text-[clamp(1.75rem,3.4vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-white text-glow">
        Comité de Adopción de IA para la Colaboración en las Redes de Valor
      </h1>
      <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-holo-mist/90 sm:text-[15px]">
        Impulsamos la inteligencia artificial para que la logística colabore
        mejor, de extremo a extremo.
      </p>
    </div>
  );
}
