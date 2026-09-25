import { ArrowUpRight, Sparkles } from "lucide-react";

import { HoloCard } from "./HoloCard";

interface HeroCardProps {
  onJoin: () => void;
}

function RadarRing() {
  return (
    <div className="relative mx-auto aspect-square h-full min-h-[150px] w-auto max-h-[38vh]">
      {/* outer ticking ring */}
      <div className="holo-ambient absolute inset-0 animate-spin-slow rounded-full border border-dashed border-holo-mint/25" />
      <div className="absolute inset-0 rounded-full border border-holo-mint/20" />
      {[14, 28, 42].map((inset) => (
        <div
          key={inset}
          className="absolute rounded-full border border-holo-mint/[0.12]"
          style={{ inset: `${inset}%` }}
        />
      ))}

      {/* crosshair reticle */}
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-holo-mint/15" />
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-holo-mint/15" />

      {/* rotating radar sweep */}
      <div
        className="holo-ambient absolute inset-0 animate-radar-sweep rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(95,227,204,0.35), rgba(95,227,204,0.05) 22%, transparent 30%, transparent 100%)",
        }}
      />

      {/* center core */}
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-holo-ember shadow-[0_0_16px_4px_rgba(252,76,2,0.7)]" />
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 animate-pulse-dot rounded-full bg-holo-ember" />

      <span className="absolute left-1/2 top-[16%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-holo-mint/80" />
      <span className="absolute right-[20%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-holo-mint/60" />
      <span className="absolute left-[22%] bottom-[34%] h-1 w-1 rounded-full bg-holo-mint/50" />
    </div>
  );
}

export function HeroCard({ onJoin }: HeroCardProps) {
  return (
    <HoloCard index={0} className="h-full" contentClassName="p-6 sm:p-8 lg:p-9">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-holo-mint">
            SYS.00 // NÚCLEO
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-holo-mint/50 sm:block">
            RED DE VALOR · V.2025
          </span>
        </div>

        <div className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-holo-mint/25 bg-holo-mint/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-holo-mint/90">
            <Sparkles className="h-3 w-3" />
            Comité activo
          </span>
          <h1 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.85rem)] font-semibold leading-[1.08] tracking-tight text-white text-glow">
            Comité de Adopción de IA para la Colaboración en las Redes de Valor
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-holo-mist/90 sm:text-[15px]">
            Impulsamos la inteligencia artificial para que la logística colabore
            mejor, de extremo a extremo.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
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

        <div className="relative mt-auto flex min-h-0 flex-1 items-end justify-center pt-6">
          <RadarRing />
        </div>
      </div>
    </HoloCard>
  );
}
