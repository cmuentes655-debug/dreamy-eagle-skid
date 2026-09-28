import { CommitteeForm } from "./CommitteeForm";
import { HoloModal } from "./HoloModal";

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
      <CommitteeForm />
    </HoloModal>
  );
}
