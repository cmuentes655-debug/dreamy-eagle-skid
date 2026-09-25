import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import { useIsDesktop } from "@/hooks/use-is-desktop";

/**
 * Desktop-only HUD target reticle that trails the pointer with a
 * faint crosshair and a mint ring. Disabled on touch and reduced-motion.
 */
export function ReticleCursor() {
  const isDesktop = useIsDesktop();
  const reduce = useReducedMotion();

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });

  useEffect(() => {
    if (!isDesktop || reduce) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [isDesktop, reduce, x, y]);

  if (!isDesktop || reduce) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden lg:block">
      <motion.div
        style={{ y: sy }}
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-holo-mint/25 to-transparent"
      />
      <motion.div
        style={{ x: sx }}
        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-holo-mint/25 to-transparent"
      />
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-holo-mint/40" />
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-holo-ember/90 shadow-[0_0_10px_rgba(252,76,2,0.9)]" />
        </div>
      </motion.div>
    </div>
  );
}
