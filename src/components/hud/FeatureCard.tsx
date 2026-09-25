import type { Feature } from "@/lib/holo-data";

import { HoloCard } from "./HoloCard";

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;
  return (
    <HoloCard index={index} className="h-full" contentClassName="p-4 sm:p-[18px]">
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <span className="font-mono text-[9.5px] uppercase leading-tight tracking-[0.18em] text-holo-mint">
            {feature.code} <span className="text-holo-mint/45">//</span>{" "}
            {feature.label}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-holo-mint/25 bg-holo-mint/5 text-holo-mint">
            <Icon className="h-4 w-4" strokeWidth={1.6} />
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="font-display text-[13.5px] font-semibold leading-tight text-white">
            {feature.title}
          </h3>
          <p className="mt-1.5 text-[11px] leading-snug text-holo-mist/75">
            {feature.description}
          </p>
        </div>
      </div>
    </HoloCard>
  );
}
