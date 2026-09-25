import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { actorTypes } from "@/lib/holo-data";

import {
  HoloModal,
  holoInputClass,
  holoLabelClass,
  holoPrimaryButtonClass,
} from "./HoloModal";

interface JoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinModal({ open, onOpenChange }: JoinModalProps) {
  return (
    <HoloModal
      open={open}
      onOpenChange={onOpenChange}
      code="SYS.JOIN // SOLICITUD"
      title="Unirse al comité"
      description="Registra tu organización para participar en los pilotos y protocolos compartidos."
    >
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-1.5">
          <Label htmlFor="join-name" className={holoLabelClass}>
            Nombre
          </Label>
          <Input
            id="join-name"
            placeholder="Tu nombre"
            className={holoInputClass}
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="join-org" className={holoLabelClass}>
            Organización
          </Label>
          <Input
            id="join-org"
            placeholder="Nombre de la organización"
            className={holoInputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <Label htmlFor="join-role" className={holoLabelClass}>
              Cargo
            </Label>
            <Input
              id="join-role"
              placeholder="Tu cargo"
              className={holoInputClass}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="join-email" className={holoLabelClass}>
              Correo
            </Label>
            <Input
              id="join-email"
              type="email"
              placeholder="nombre@empresa.cl"
              className={holoInputClass}
            />
          </div>
        </div>

        <div className="grid gap-1.5">
          <Label className={holoLabelClass}>Tipo de actor</Label>
          <Select>
            <SelectTrigger className={holoInputClass}>
              <SelectValue placeholder="Selecciona un tipo" />
            </SelectTrigger>
            <SelectContent className="border-holo-mint/25 bg-[#002622]">
              {actorTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="text-holo-mist focus:bg-holo-mint/15 focus:text-white"
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className={holoPrimaryButtonClass}>
          Enviar solicitud
        </Button>
        <p className="text-center font-mono text-[9.5px] uppercase tracking-[0.18em] text-holo-mint/45">
          Revisión del comité en 5 días hábiles
        </p>
      </form>
    </HoloModal>
  );
}
