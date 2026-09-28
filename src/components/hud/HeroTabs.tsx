import { type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export type HeroTabId =
  | "home"
  | "participants"
  | "dates"
  | "form"
  | "pillars";

export interface HeroTab {
  id: HeroTabId;
  label: string;
}

interface HeroTabsProps {
  tabs: HeroTab[];
  active: HeroTabId;
  onChange: (id: HeroTabId) => void;
  children: ReactNode;
}

/**
 * Accessible horizontal tab bar with an animated sliding indicator plus the
 * scrollable panel container. Fixed in place while the panel scrolls inland.
 */
export function HeroTabs({ tabs, active, onChange, children }: HeroTabsProps) {
  const reduce = useReducedMotion();

  const focusTab = (id: HeroTabId) => {
    requestAnimationFrame(() => {
      document.getElementById(`hero-tab-${id}`)?.focus();
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex === null) return;
    event.preventDefault();
    const nextId = tabs[nextIndex].id;
    onChange(nextId);
    focusTab(nextId);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="shrink-0 border-b border-holo-mint/15">
        <div
          role="tablist"
          aria-label="Secciones del comité"
          className="hide-scrollbar -mx-1 flex gap-0.5 overflow-x-auto px-1"
        >
          {tabs.map((tab, index) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`hero-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`hero-tabpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => onChange(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={cn(
                  "relative shrink-0 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] outline-none transition-colors sm:text-[10.5px] sm:tracking-[0.2em]",
                  isActive
                    ? "text-white"
                    : "text-holo-mint/50 hover:text-holo-mint/80 focus-visible:text-holo-mint/80",
                )}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="heroTabIndicator"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-holo-mint shadow-[0_0_10px_1px_rgba(95,227,204,0.7)]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`hero-tabpanel-${active}`}
        aria-labelledby={`hero-tab-${active}`}
        tabIndex={0}
        className="hide-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain pt-3 outline-none"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="pb-1"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
