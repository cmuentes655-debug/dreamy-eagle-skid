import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface HoloModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  code: string;
  title: string;
  description?: string;
  children: ReactNode;
}

const CORNERS = [
  { pos: "left-3 top-3 border-l border-t", origin: "top left" },
  { pos: "right-3 top-3 border-r border-t", origin: "top right" },
  { pos: "bottom-3 left-3 border-b border-l", origin: "bottom left" },
  { pos: "bottom-3 right-3 border-b border-r", origin: "bottom right" },
] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
};

const cornerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.25 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Holographic modal shell. Uses the shadcn dialog primitive but "materialises"
 * the panel: the four angle brackets draw first, then the content fades in.
 */
export function HoloModal({
  open,
  onOpenChange,
  code,
  title,
  description,
  children,
}: HoloModalProps) {
  const reduce = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "max-w-md overflow-hidden rounded-2xl border border-holo-mint/30 p-0 text-holo-mist sm:rounded-2xl",
          "bg-[#002622]/95 backdrop-blur-xl",
          "shadow-[0_0_70px_-18px_rgba(95,227,204,0.45)]",
        )}
      >
        <div className="holo-grid-fine pointer-events-none absolute inset-0 opacity-40" />
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="relative p-6 sm:p-7"
        >
          {CORNERS.map((c) => (
            <motion.span
              key={c.pos}
              variants={cornerVariants}
              style={{ transformOrigin: c.origin }}
              className={cn("holo-corner !h-4 !w-4", c.pos)}
            />
          ))}

          <motion.div variants={contentVariants} className="flex flex-col gap-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-holo-mint">
                {code}
              </p>
              <DialogTitle className="mt-2 font-display text-xl font-semibold text-white">
                {title}
              </DialogTitle>
              {description && (
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-holo-mist/75">
                  {description}
                </p>
              )}
            </div>

            {children}
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

/** Shared field styling for holographic form controls. */
export const holoInputClass =
  "h-10 rounded-lg border-holo-mint/25 bg-black/30 text-sm text-white placeholder:text-holo-mint/40 focus-visible:border-holo-mint/60 focus-visible:ring-1 focus-visible:ring-holo-mint/40 focus-visible:ring-offset-0";

export const holoLabelClass =
  "font-mono text-[10px] uppercase tracking-[0.18em] text-holo-mint/80";

export const holoPrimaryButtonClass =
  "w-full rounded-full bg-holo-ember font-mono text-[11px] uppercase tracking-[0.16em] text-white shadow-[0_0_26px_-8px_rgba(252,76,2,0.9)] hover:bg-holo-ember/90 hover:text-white";
