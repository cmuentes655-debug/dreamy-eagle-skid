import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import { useDocumentVisible } from "@/hooks/use-document-visible";
import { useIsDesktop } from "@/hooks/use-is-desktop";

/**
 * Fixed, full-viewport duotone background image.
 *
 * - Sits behind the animated aurora (`-z-30`) on a very dark turquoise base.
 * - Grayscale + a turquoise `color` blend layer turns the photo into a duotone
 *   so the original blue tones are never perceived.
 * - Nearly imperceptible Ken Burns zoom (CSS keyframes), pausable when the tab
 *   is hidden and disabled under `prefers-reduced-motion`.
 * - Desktop-only mouse parallax (≤12px, opposite the cursor) with a soft spring.
 * - Never intercepts pointer events.
 */

/** Maximum parallax travel in pixels, per axis (range is ±12px). */
const PARALLAX_RANGE = 24;

export function BackgroundImage() {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const visible = useDocumentVisible();
  const parallaxEnabled = isDesktop && !reduce;

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const spring = { stiffness: 60, damping: 20, mass: 0.8 };
  const x = useSpring(mvX, spring);
  const y = useSpring(mvY, spring);

  useEffect(() => {
    if (!parallaxEnabled) {
      mvX.set(0);
      mvY.set(0);
      return;
    }

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5; // -0.5 .. 0.5
      const ny = e.clientY / window.innerHeight - 0.5;
      mvX.set(-nx * PARALLAX_RANGE);
      mvY.set(-ny * PARALLAX_RANGE);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [parallaxEnabled, mvX, mvY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -30, backgroundColor: "var(--bg-base)" }}
    >
      <div
        className="absolute inset-0"
        style={{ opacity: "var(--bg-image-opacity)" }}
      >
        <motion.div className="absolute inset-0" style={{ x, y, scale: 1.05 }}>
          <img
            src={`${import.meta.env.BASE_URL}fondo-red-global.jpg`}
            alt=""
            className="bg-kenburns h-full w-full object-cover"
            style={{
              objectPosition: "center bottom",
              filter: "grayscale(100%) contrast(1.15) brightness(0.85)",
              animationPlayState: visible ? "running" : "paused",
            }}
          />
        </motion.div>

        {/* turquoise duotone tint */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--bg-tint)", mixBlendMode: "color" }}
        />
      </div>
    </div>
  );
}
