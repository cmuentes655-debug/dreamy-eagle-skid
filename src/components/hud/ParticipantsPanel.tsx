import { Users } from "lucide-react";

import { participants } from "@/lib/holo-data";

function monogram(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function ParticipantsPanel() {
  if (participants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2.5 py-12 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-holo-mint/25 bg-holo-mint/5 text-holo-mint/70">
          <Users className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <p className="font-display text-sm font-semibold text-white/90">
          Sin participantes aún
        </p>
        <p className="max-w-xs text-[12px] leading-relaxed text-holo-mist/60">
          Cuando las organizaciones se sumen, sus logos aparecerán aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {participants.map((participant) => (
        <div
          key={participant.name}
          className="group flex flex-col gap-2.5 rounded-xl border border-holo-mint/15 bg-black/25 p-3 transition-colors hover:border-holo-mint/40 hover:bg-holo-mint/5"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-holo-mint/25 bg-holo-mint/5 font-display text-[13px] font-semibold uppercase tracking-tight text-holo-mint">
            {participant.logo ? (
              <img
                src={participant.logo}
                alt={participant.name}
                className="h-6 w-6 object-contain"
              />
            ) : (
              monogram(participant.name)
            )}
          </span>
          <div className="min-w-0">
            <p className="truncate text-[12px] font-medium leading-tight text-white">
              {participant.name}
            </p>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-holo-mint/55">
              {participant.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
