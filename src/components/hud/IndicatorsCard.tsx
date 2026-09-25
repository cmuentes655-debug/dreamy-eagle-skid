import { motion, useReducedMotion } from "framer-motion";
import { Activity } from "lucide-react";

import { indicators, sensorBars } from "@/lib/holo-data";
import { cn } from "@/lib/utils";

import { HoloCard } from "./HoloCard";

const GRID_LINES = [25, 50, 75];

export function IndicatorsCard({ index }: { index: number }) {
  const reduce = useReducedMotion();

  return (
    <HoloCard
      index={index}
      className="col-span-1 h-full sm:col-span-2 lg:col-span-3"
      contentClassName="p-4 sm:p-5"
    >
      <div className="flex h-full flex-col gap-4 lg:flex-row lg:items-stretch">
        {/* telemetry counters */}
        <div className="flex flex-col justify-between gap-4 lg:w-[54%]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-holo-mint">
              SENSORES // INDICADORES
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-holo-mint/50">
              <Activity className="h-3 w-3" />
              en vivo
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {indicators.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "rounded-xl border bg-black/20 px-3 py-3",
                  item.highlight
                    ? "border-holo-ember/45 bg-holo-ember/10"
                    : "border-holo-mint/15",
                )}
              >
                <p
                  className={cn(
                    "font-display text-2xl font-semibold leading-none sm:text-[28px]",
                    item.highlight ? "text-holo-ember" : "text-white",
                  )}
                >
                  {item.value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase leading-tight tracking-[0.14em] text-holo-mist/70">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* mini bar chart */}
        <div className="relative flex min-h-[120px] flex-1 flex-col overflow-hidden rounded-xl border border-holo-mint/15 bg-black/25 p-3">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            {GRID_LINES.map((top) => (
              <span
                key={top}
                className="absolute inset-x-0 h-px bg-holo-mint/10"
                style={{ top: `${top}%` }}
              />
            ))}
          </div>

          <div className="relative flex flex-1 items-end gap-1.5">
            {sensorBars.map((value, i) => {
              const isPeak = value === Math.max(...sensorBars);
              return (
                <div key={i} className="flex h-full flex-1 items-end">
                  <motion.div
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${value}%` }}
                    transition={{
                      duration: reduce ? 0 : 0.9,
                      delay: reduce ? 0 : 0.25 + i * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "w-full rounded-t-[3px]",
                      isPeak
                        ? "bg-gradient-to-t from-holo-ember/40 to-holo-ember"
                        : "bg-gradient-to-t from-holo-teal/30 to-holo-mint/80",
                    )}
                  />
                </div>
              );
            })}
          </div>

          <div className="relative mt-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-holo-mint/45">
            <span>telemetría</span>
            <span>últimas 12 semanas</span>
          </div>
        </div>
      </div>
    </HoloCard>
  );
}
