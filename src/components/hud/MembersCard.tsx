import { FolderUp, LogIn } from "lucide-react";

import { HoloCard } from "./HoloCard";

interface MembersCardProps {
  index: number;
  onLogin: () => void;
  onUpload: () => void;
}

export function MembersCard({ index, onLogin, onUpload }: MembersCardProps) {
  return (
    <HoloCard index={index} className="h-full" contentClassName="p-4 sm:p-[18px]">
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <span className="font-mono text-[9.5px] uppercase leading-tight tracking-[0.18em] text-holo-mint">
            ACCESO <span className="text-holo-mint/45">//</span> MIEMBROS
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-holo-mint/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-dot rounded-full bg-holo-mint" />
              <span className="absolute inset-0 rounded-full bg-holo-mint" />
            </span>
            En línea
          </span>
        </div>

        <p className="text-[11px] leading-snug text-holo-mist/70">
          Área reservada para las organizaciones miembro del comité.
        </p>

        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            onClick={onLogin}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-holo-mint/30 bg-holo-mint/5 px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-holo-mint transition-colors hover:border-holo-mint/60 hover:bg-holo-mint/15 hover:text-white"
          >
            <LogIn className="h-3.5 w-3.5" />
            Iniciar sesión
          </button>
          <button
            type="button"
            onClick={onUpload}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-holo-mint/20 bg-black/20 px-3 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-holo-mist/80 transition-colors hover:border-holo-mint/50 hover:text-white"
          >
            <FolderUp className="h-3.5 w-3.5" />
            Cargar archivos
          </button>
        </div>
      </div>
    </HoloCard>
  );
}
