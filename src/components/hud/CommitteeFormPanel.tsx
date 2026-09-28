import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { CommitteeForm } from "./CommitteeForm";

interface CommitteeFormPanelProps {
  /** Increments when the hero CTA asks to focus the first field */
  focusRequest?: number;
}

export function CommitteeFormPanel({ focusRequest = 0 }: CommitteeFormPanelProps) {
  const [sent, setSent] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusRequest || sent) return;
    const frame = requestAnimationFrame(() => {
      containerRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [focusRequest, sent]);

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-holo-mint/25 bg-holo-mint/5 px-6 py-10 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-holo-mint/40 bg-holo-mint/10 text-holo-mint">
          <CheckCircle2 className="h-5 w-5" strokeWidth={1.7} />
        </span>
        <p className="font-display text-base font-semibold text-white">
          Solicitud enviada
        </p>
        <p className="max-w-xs text-[12.5px] leading-relaxed text-holo-mist/75">
          Gracias por sumarte. Nuestro equipo revisará tu información y te
          contactará pronto.
        </p>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-holo-mint/55">
          Revisión del comité en 5 días hábiles
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-1 rounded-full border border-holo-mint/25 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-holo-mint/90 transition-colors hover:border-holo-mint/60 hover:bg-holo-mint/10 hover:text-white"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      <p className="text-[12px] leading-relaxed text-holo-mist/70">
        Registra tu organización para participar en los pilotos y protocolos
        compartidos.
      </p>
      <CommitteeForm idPrefix="panel" onSubmitted={() => setSent(true)} />
    </div>
  );
}
