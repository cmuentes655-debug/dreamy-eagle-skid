import { LogIn, Plus } from "lucide-react";

interface TopBarProps {
  onLogin: () => void;
  onJoin: () => void;
}

export function TopBar({ onLogin, onJoin }: TopBarProps) {
  return (
    <header className="relative z-30 shrink-0">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:h-20 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Comité de Adopción de IA"
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
          <div className="leading-none">
            <p className="font-mono text-[10px] tracking-[0.3em] text-holo-mint/70">
              SYS.00 // RED
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
              Comité de IA
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onLogin}
            className="hidden items-center gap-1.5 rounded-full border border-holo-mint/25 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-holo-mint/90 transition-colors hover:border-holo-mint/60 hover:bg-holo-mint/10 hover:text-white sm:inline-flex"
          >
            <LogIn className="h-3.5 w-3.5" />
            Iniciar sesión
          </button>
          <button
            type="button"
            onClick={onJoin}
            className="group inline-flex items-center gap-1.5 rounded-full bg-holo-ember px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white shadow-[0_0_24px_-6px_rgba(252,76,2,0.9)] transition-transform hover:-translate-y-0.5 hover:brightness-110"
          >
            <Plus className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
            <span>Unirse al comité</span>
          </button>
        </nav>
      </div>

      {/* scanner line */}
      <div className="relative h-px w-full overflow-hidden bg-holo-mint/15">
        <span className="holo-ambient animate-scanner-line absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-holo-mint to-transparent" />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-holo-mint/20 to-transparent" />
      </div>
    </header>
  );
}
