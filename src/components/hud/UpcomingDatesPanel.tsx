import { CalendarClock } from "lucide-react";

import { upcomingDates, type CommitteeDateStatus } from "@/lib/holo-data";
import { cn } from "@/lib/utils";

const statusStyles: Record<CommitteeDateStatus, string> = {
  "Inscripciones abiertas":
    "border-holo-ember/45 bg-holo-ember/10 text-holo-ember",
  Confirmada: "border-holo-mint/40 bg-holo-mint/10 text-holo-mint",
  Próximamente: "border-holo-mint/20 bg-black/20 text-holo-mint/55",
};

export function UpcomingDatesPanel() {
  if (upcomingDates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2.5 py-12 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-holo-mint/25 bg-holo-mint/5 text-holo-mint/70">
          <CalendarClock className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <p className="font-display text-sm font-semibold text-white/90">
          Sin fechas programadas
        </p>
        <p className="max-w-xs text-[12px] leading-relaxed text-holo-mist/60">
          Las próximas sesiones del comité se publicarán aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col">
      {upcomingDates.length > 1 && (
        <span
          aria-hidden
          className="absolute bottom-3 left-6 top-3 w-px bg-holo-mint/12"
        />
      )}

      {upcomingDates.map((item) => (
        <div
          key={`${item.day}-${item.month}-${item.title}`}
          className="relative flex gap-3 pb-3 last:pb-0"
        >
          <div className="flex w-12 shrink-0 flex-col items-center rounded-lg border border-holo-mint/20 bg-black/40 py-1.5">
            <span className="font-display text-lg font-semibold leading-none text-white">
              {item.day}
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-holo-mint/70">
              {item.month}
            </span>
          </div>

          <div className="min-w-0 flex-1 rounded-xl border border-holo-mint/10 bg-black/15 p-2.5 transition-colors hover:border-holo-mint/30">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[12.5px] font-medium leading-tight text-white">
                {item.title}
              </p>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.1em]",
                  statusStyles[item.status],
                )}
              >
                {item.status}
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-snug text-holo-mist/70">
              {item.description}
            </p>
            <p className="mt-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-holo-mint/60">
              {item.meta}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
