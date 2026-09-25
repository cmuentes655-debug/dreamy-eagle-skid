import { FileText, UploadCloud } from "lucide-react";

import { Button } from "@/components/ui/button";
import { sampleFiles, type SampleFile } from "@/lib/holo-data";
import { cn } from "@/lib/utils";

import { HoloModal, holoPrimaryButtonClass } from "./HoloModal";

interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STATUS_STYLES: Record<SampleFile["status"], string> = {
  listo: "border-holo-mint/40 bg-holo-mint/10 text-holo-mint",
  procesando: "border-holo-ember/45 bg-holo-ember/10 text-holo-ember",
  cifrado: "border-holo-teal/40 bg-holo-teal/10 text-holo-teal",
};

export function UploadModal({ open, onOpenChange }: UploadModalProps) {
  return (
    <HoloModal
      open={open}
      onOpenChange={onOpenChange}
      code="SYS.DATA // ARCHIVOS"
      title="Cargar archivos"
      description="Comparte documentos y datasets con los demás miembros del comité."
    >
      {/* drag & drop reticle */}
      <div className="relative overflow-hidden rounded-xl border border-dashed border-holo-mint/35 bg-black/25 p-6 text-center">
        <div className="holo-grid-fine pointer-events-none absolute inset-0 opacity-50" />
        <span className="holo-ambient pointer-events-none absolute inset-0 overflow-hidden">
          <span className="animate-scan absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-holo-mint/15 to-transparent" />
        </span>
        <div className="relative flex flex-col items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-holo-mint/30 bg-holo-mint/10 text-holo-mint">
            <UploadCloud className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <p className="font-display text-sm font-medium text-white">
            Arrastra tus archivos aquí
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-holo-mint/50">
            o explora el sistema · máx 25 MB
          </p>
        </div>
      </div>

      {/* sample file list */}
      <ul className="flex flex-col gap-2">
        {sampleFiles.map((file) => (
          <li
            key={file.name}
            className="flex items-center gap-3 rounded-lg border border-holo-mint/15 bg-black/20 px-3 py-2"
          >
            <FileText className="h-4 w-4 shrink-0 text-holo-mint/70" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-[11px] text-holo-mist">
                {file.name}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-holo-mint/40">
                {file.size}
              </p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                STATUS_STYLES[file.status],
              )}
            >
              {file.status}
            </span>
          </li>
        ))}
      </ul>

      <Button type="button" className={holoPrimaryButtonClass}>
        Subir archivos
      </Button>
    </HoloModal>
  );
}
