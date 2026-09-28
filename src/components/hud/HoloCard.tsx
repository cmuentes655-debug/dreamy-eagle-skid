import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";
import { useIsDesktop } from "@/hooks/use-is-desktop";

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** stagger index — drives entrance delay and scan-line offset */
  index?: number;
  /** show the ambient scan effect */
  scan?: boolean;
  /** scan effect style: a crisp ambient line (default) or the soft moving band */
  scanVariant?: "line" | "band";
  /** enable the 3D tilt following the cursor (desktop only) */
  tilt?: boolean;
}

const CORNERS = [
  { pos: "left-0 top-0 border-l border-t", origin: "top left" },
  { pos: "right-0 top-0 border-r border-t", origin: "top right" },
  { pos: "bottom-0 left-0 border-b border-l", origin: "bottom left" },
  { pos: "bottom-0 right-0 border-b border-r", origin: "bottom right" },
] as const;

const cornerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.35 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Reusable holographic HUD panel: translucent glass, glowing angle brackets,
 * an optional ambient scan effect and a desktop-only 3D tilt.
 */
export function HoloCard({
  children,
  className,
  contentClassName,
  index = 0,
  scan = true,
  scanVariant = "line",
  tilt = true,
}: HoloCardProps) {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const tiltEnabled = tilt && isDesktop && !reduce;

  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 150, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), spring);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduce ? 0 : index * 0.09,
        staggerChildren: reduce ? 0 : 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={reduce ? false : "hidden"}
      animate="show"
      className={cn("relative min-h-0 min-w-0", className)}
    >
      <motion.div
        ref={ref}
        onPointerMove={tiltEnabled ? handlePointerMove : undefined}
        onPointerLeave={tiltEnabled ? handlePointerLeave : undefined}
        style={
          tiltEnabled
            ? { rotateX, rotateY, transformPerspective: 1100 }
            : undefined
        }
        className={cn(
          "group/holo relative flex h-full w-full flex-col overflow-hidden rounded-2xl",
          "border border-holo-mint/20 bg-[#00332C]/45 backdrop-blur-md",
          "shadow-[inset_0_1px_0_0_rgba(95,227,204,0.12),0_24px_60px_-40px_rgba(0,0,0,0.9)]",
          "transition-[border-color,box-shadow] duration-500",
          "hover:border-holo-mint/45 hover:shadow-[inset_0_1px_0_0_rgba(95,227,204,0.2),0_0_40px_-10px_rgba(95,227,204,0.45)]",
          contentClassName,
        )}
      >
        {/* top edge sheen */}
        <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-holo-mint/40 to-transparent" />

        {/* angle brackets */}
        {CORNERS.map((c) => (
          <motion.span
            key={c.pos}
            variants={cornerVariants}
            style={{ transformOrigin: c.origin }}
            className={cn(
              "holo-corner rounded-[2px] group-hover/holo:!h-6 group-hover/holo:!w-6",
              c.pos,
            )}
          />
        ))}

        {/* soft top-to-bottom moving band (hero) */}
        {scan && scanVariant === "band" && (
          <span className="holo-ambient pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <span
              aria-hidden
              className="animate-scan absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-holo-mint/20 to-transparent"
              style={{ animationDelay: `${index * 1.6}s` }}
            />
          </span>
        )}

        {/* cascading relay scan line: one card sweeps ~2.5s, staggered across the 8 bento cards */}
        {/* NOTE: 20s cycle = 2.5s × 8 cards; adjust delay/cycle if the card count changes */}
        {scan && scanVariant === "line" && (
          <>
            {/* brief full-border pulse, synced with the sweep */}
            <span
              aria-hidden
              className="holo-ambient pointer-events-none absolute inset-0 animate-hud-scan-glow rounded-2xl border border-holo-mint/60"
              style={{ animationDelay: `${-index * 2.5}s` }}
            />
            {/* line + trail */}
            <span className="holo-ambient pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <span
                aria-hidden
                className="absolute inset-0 animate-hud-scan"
                style={{ animationDelay: `${-index * 2.5}s` }}
              >
                {/* trail (40px) */}
                <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-holo-mint/15 to-transparent" />
                {/* scan line (2px) + turquoise glow */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-holo-mint/55 shadow-[0_0_6px_1px_rgba(95,227,204,0.4)]" />
              </span>
            </span>
          </>
        )}

        {reduce ? (
          <div className="relative z-10 flex h-full flex-col">{children}</div>
        ) : (
          <motion.div
            variants={contentVariants}
            className="relative z-10 flex h-full flex-col"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
