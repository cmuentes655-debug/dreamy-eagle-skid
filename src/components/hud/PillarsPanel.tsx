import { pillars } from "@/lib/holo-data";
import { cn } from "@/lib/utils";

export function PillarsPanel() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <div
            key={pillar.code}
            className={cn(
              "group flex gap-3 rounded-xl border p-3 transition-colors",
              pillar.span === "full" && "sm:col-span-2",
              pillar.lead
                ? "border-holo-mint/30 bg-gradient-to-br from-holo-mint/10 to-transparent hover:border-holo-mint/50"
                : "border-holo-mint/15 bg-black/25 hover:border-holo-mint/40 hover:bg-holo-mint/5",
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-holo-mint/25 bg-holo-mint/5 text-holo-mint">
              <Icon className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-holo-mint/60">
                  {pillar.code}
                </span>
                <p className="font-display text-[13px] font-semibold leading-tight text-white">
                  {pillar.title}
                </p>
              </div>

              {pillar.description && (
                <p
                  className={cn(
                    "mt-1 leading-snug text-holo-mist/70",
                    pillar.lead ? "text-xs sm:text-[13px]" : "text-[11px]",
                  )}
                >
                  {pillar.description}
                </p>
              )}

              {pillar.items && (
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11px] leading-snug text-holo-mist/70"
                    >
                      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-holo-mint shadow-[0_0_6px_1px_rgba(95,227,204,0.6)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
