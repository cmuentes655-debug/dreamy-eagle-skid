import { type FormEvent } from "react";

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
  holoInputClass,
  holoLabelClass,
  holoPrimaryButtonClass,
} from "./HoloModal";

interface CommitteeFormProps {
  /** Prefix for the field ids so the form can be mounted in more than one place */
  idPrefix?: string;
  /** Called with the form data after a valid submit */
  onSubmitted?: () => void;
  /** Submit button label */
  submitLabel?: string;
}

/**
 * Shared fields for joining the committee. Reused by the hero FORMULARIO tab
 * and by the TopBar JoinModal so the fields never get duplicated.
 */
export function CommitteeForm({
  idPrefix = "join",
  onSubmitted,
  submitLabel = "Enviar solicitud",
}: CommitteeFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitted?.();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-name`} className={holoLabelClass}>
          Nombre
        </Label>
        <Input
          id={`${idPrefix}-name`}
          placeholder="Tu nombre"
          className={holoInputClass}
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor={`${idPrefix}-org`} className={holoLabelClass}>
          Organización
        </Label>
        <Input
          id={`${idPrefix}-org`}
          placeholder="Nombre de la organización"
          className={holoInputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor={`${idPrefix}-role`} className={holoLabelClass}>
            Cargo
          </Label>
          <Input
            id={`${idPrefix}-role`}
            placeholder="Tu cargo"
            className={holoInputClass}
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor={`${idPrefix}-email`} className={holoLabelClass}>
            Correo
          </Label>
          <Input
            id={`${idPrefix}-email`}
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
        {submitLabel}
      </Button>
      <p className="text-center font-mono text-[9.5px] uppercase tracking-[0.18em] text-holo-mint/45">
        Revisión del comité en 5 días hábiles
      </p>
    </form>
  );
}
