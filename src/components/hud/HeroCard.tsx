import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { HoloCard } from "./HoloCard";
import { HeroTabs, type HeroTab, type HeroTabId } from "./HeroTabs";
import { ParticipantsPanel } from "./ParticipantsPanel";
import { UpcomingDatesPanel } from "./UpcomingDatesPanel";
import { CommitteeFormPanel } from "./CommitteeFormPanel";
import { PillarsPanel } from "./PillarsPanel";

const TABS: HeroTab[] = [
  { id: "participants", label: "Participantes" },
  { id: "dates", label: "Próximas fechas" },
  { id: "form", label: "Formulario" },
  { id: "pillars", label: "Pilares" },
];

export function HeroCard() {
  const [activeTab, setActiveTab] = useState<HeroTabId>("participants");
  const [focusRequest, setFocusRequest] = useState(0);

  const handleJoin = () => {
    setActiveTab("form");
    setFocusRequest((count) => count + 1);
  };

  return (
    <HoloCard
      index={0}
      scanVariant="band"
      className="h-full"
      contentClassName="p-5 sm:p-7 lg:p-8"
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-holo-mint">
            SYS.00 // NÚCLEO
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-holo-mint/50 sm:block">
            RED DE VALOR · V.2025
          </span>
        </div>

        <div className="shrink-0 pt-4 sm:pt-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-holo-mint/25 bg-holo-mint/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-holo-mint/90">
            <Sparkles className="h-3 w-3" />
            Comité activo
          </span>
          <h1 className="mt-3 font-display text-[clamp(1.5rem,2.7vw,2.4rem)] font-semibold leading-[1.08] tracking-tight text-white text-glow">
            Comité de Adopción de IA para la Colaboración en las Redes de Valor
          </h1>
          <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-holo-mist/85 sm:text-sm">
            Impulsamos la inteligencia artificial para que la logística colabore
            mejor, de extremo a extremo.
          </p>
        </div>

        <div className="mt-4 flex min-h-0 flex-1 flex-col sm:mt-5">
          <HeroTabs tabs={TABS} active={activeTab} onChange={setActiveTab}>
            {activeTab === "participants" && <ParticipantsPanel />}
            {activeTab === "dates" && <UpcomingDatesPanel />}
            {activeTab === "form" && (
              <CommitteeFormPanel focusRequest={focusRequest} />
            )}
            {activeTab === "pillars" && <PillarsPanel />}
          </HeroTabs>
        </div>

        <div className="mt-4 flex shrink-0 flex-wrap items-center gap-4 border-t border-holo-mint/10 pt-4">
          <button
            type="button"
            onClick={handleJoin}
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
