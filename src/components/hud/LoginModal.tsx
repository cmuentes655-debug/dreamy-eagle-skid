import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  HoloModal,
  holoInputClass,
  holoLabelClass,
  holoPrimaryButtonClass,
} from "./HoloModal";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  return (
    <HoloModal
      open={open}
      onOpenChange={onOpenChange}
      code="SYS.AUTH // ACCESO"
      title="Iniciar sesión"
      description="Accede al área reservada para organizaciones miembro del comité."
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5">
          <Label htmlFor="login-email" className={holoLabelClass}>
            Correo
          </Label>
          <Input
            id="login-email"
            type="email"
            placeholder="nombre@empresa.cl"
            className={holoInputClass}
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="login-password" className={holoLabelClass}>
            Contraseña
          </Label>
          <Input
            id="login-password"
            type="password"
            placeholder="••••••••"
            className={holoInputClass}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-holo-mint/70 underline-offset-4 transition-colors hover:text-holo-mint hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-holo-mint/40">
            Sesión cifrada
          </span>
        </div>

        <Button type="submit" className={holoPrimaryButtonClass}>
          Ingresar
        </Button>
      </form>
    </HoloModal>
  );
}
