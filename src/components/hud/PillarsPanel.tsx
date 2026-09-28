import { pillars } from "@/lib/holo-data";

export function PillarsPanel() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <div
            key={pillar.code}
            className="group flex gap-3 rounded-xl border border-holo-mint/15 bg-black/25 p-3 transition-colors hover:border-holo-mint/40 hover:bg-holo-mint/5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-holo-mint/25 bg-holo-mint/5 text-holo-mint">
              <Icon className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-holo-mint/60">
                  {pillar.code}
                </span>
                <p className="font-display text-[13px] font-semibold leading-tight text-white">
                  {pillar.title}
                </p>
              </div>
              <p className="mt-1 text-[11px] leading-snug text-holo-mist/70">
                {pillar.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
