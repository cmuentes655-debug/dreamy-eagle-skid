import { ArrowUpRight, Sparkles } from "lucide-react";

import { HoloCard } from "./HoloCard";

interface HeroCardProps {
  onJoin: () => void;
}

export function HeroCard({ onJoin }: HeroCardProps) {
  return (
    <HoloCard
      index={0}
      scanVariant="band"
      className="h-full"
      contentClassName="p-6 sm:p-8 lg:p-9"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-holo-mint">
            SYS.00 // NÚCLEO
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-holo-mint/50 sm:block">
            RED DE VALOR · V.2025
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-holo-mint/25 bg-holo-mint/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-holo-mint/90">
            <Sparkles className="h-3 w-3" />
            Comité activo
          </span>
          <h1 className="mt-5 font-display text-[clamp(2rem,3.9vw,3.3rem)] font-semibold leading-[1.06] tracking-tight text-white text-glow">
            Comité de Adopción de IA para la Colaboración en las Redes de Valor
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-holo-mist/90 sm:text-[15px]">
            Impulsamos la inteligencia artificial para que la logística colabore
            mejor, de extremo a extremo.
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-holo-mint/10 pt-5">
          <button
            type="button"
            onClick={onJoin}
            className="group inline-flex items-center gap-2 rounded-full bg-holo-ember px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] text-white shadow-[0_0_30px_-6px_rgba(252,76,2,0.9)] transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            Unirse al comité
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-holo-mint/50">
            Sin costo · Pilotos reales
          </p>
        </div>
      </div>
    </HoloCard>
  );
}
