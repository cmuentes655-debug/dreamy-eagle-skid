import {
  BookText,
  FlaskConical,
  Lightbulb,
  LineChart,
  Network,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  /** System code, e.g. "SYS.01" */
  code: string;
  /** Mono label shown next to the code, e.g. "ARTICULACIÓN" */
  label: string;
  /** Short headline of the capability */
  title: string;
  /** One-line description */
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    code: "SYS.01",
    label: "ARTICULACIÓN",
    title: "Articular actores",
    description:
      "Conectamos empresas, instituciones y gremios de la cadena logística.",
    icon: Network,
  },
  {
    code: "SYS.02",
    label: "PROTOCOLOS",
    title: "Guías, manuales y protocolos",
    description:
      "Desarrollamos lineamientos prácticos para adoptar IA de forma responsable.",
    icon: BookText,
  },
  {
    code: "SYS.03",
    label: "PRÁCTICAS",
    title: "Buenas prácticas",
    description:
      "Compartimos información, casos y aprendizajes entre miembros.",
    icon: Lightbulb,
  },
  {
    code: "SYS.04",
    label: "PILOTOS",
    title: "Pilotos y validación",
    description:
      "Implementamos pilotos y validamos herramientas de IA en operaciones reales.",
    icon: FlaskConical,
  },
  {
    code: "SYS.05",
    label: "MÉTRICAS",
    title: "Indicadores comunes",
    description:
      "Monitoreamos los avances con métricas compartidas.",
    icon: LineChart,
  },
];

export interface Indicator {
  /** Telemetry readout value */
  value: string;
  /** What the value measures */
  label: string;
  /** Accent value rendered in orange */
  highlight?: boolean;
}

export const indicators: Indicator[] = [
  { value: "+40", label: "organizaciones" },
  { value: "12", label: "pilotos activos", highlight: true },
  { value: "5", label: "guías publicadas" },
];

/** Sample telemetry used by the mini bar chart (SYS.05 readout). */
export const sensorBars: number[] = [38, 62, 45, 78, 54, 88, 66, 72, 49, 83, 58, 70];

export interface SampleFile {
  name: string;
  size: string;
  status: "listo" | "procesando" | "cifrado";
}

export const sampleFiles: SampleFile[] = [
  { name: "lineamientos_ia_v2.pdf", size: "2.4 MB", status: "listo" },
  { name: "piloto_cadena_frio.csv", size: "812 KB", status: "procesando" },
  { name: "metricas_redes_valor.xlsx", size: "1.1 MB", status: "cifrado" },
];

export const actorTypes: string[] = [
  "Empresa y operador logístico",
  "Institución pública",
  "Gremio o asociación",
  "Academia e investigación",
  "Proveedor de tecnología",
];
