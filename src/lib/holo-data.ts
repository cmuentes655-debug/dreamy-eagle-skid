import {
  BookText,
  Flag,
  FlaskConical,
  Handshake,
  Lightbulb,
  LineChart,
  ListChecks,
  Network,
  Target,
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

/* ── Comité · participantes, fechas y pilares ───────────── */

export interface Participant {
  /** Organization name */
  name: string;
  /** Actor type label shown under the name */
  type: string;
  /** Optional logo path; a monogram placeholder is drawn when missing */
  logo?: string;
}

export const participants: Participant[] = [
  { name: "Puerto Valparaíso", type: "Operador logístico" },
  { name: "Terminal Andino", type: "Terminal portuaria" },
  { name: "Corfo", type: "Institución pública" },
  { name: "Cámara Aduanera", type: "Gremio y asociación" },
  { name: "Universidad Técnica", type: "Academia e investigación" },
  { name: "Telemetría Sur", type: "Proveedor de tecnología" },
];

export type CommitteeDateStatus =
  | "Inscripciones abiertas"
  | "Confirmada"
  | "Próximamente";

export interface CommitteeDate {
  /** Day number, e.g. "18" */
  day: string;
  /** Short month, e.g. "MAR" */
  month: string;
  title: string;
  description: string;
  /** Time / location line */
  meta: string;
  status: CommitteeDateStatus;
}

export const upcomingDates: CommitteeDate[] = [
  {
    day: "18",
    month: "MAR",
    title: "Sesión mensual del comité",
    description: "Revisión de avances de pilotos y validación de protocolos.",
    meta: "09:30 · Remoto",
    status: "Inscripciones abiertas",
  },
  {
    day: "02",
    month: "ABR",
    title: "Taller de protocolos de IA",
    description: "Co-creación de lineamientos para una adopción responsable.",
    meta: "11:00 · Santiago",
    status: "Confirmada",
  },
  {
    day: "22",
    month: "ABR",
    title: "Demo day de pilotos",
    description: "Presentación de resultados de las pruebas en operaciones reales.",
    meta: "15:00 · Híbrido",
    status: "Próximamente",
  },
  {
    day: "14",
    month: "MAY",
    title: "Comité ampliado · nuevas redes",
    description: "Incorporación de nuevos actores y ampliación del alcance.",
    meta: "10:00 · Remoto",
    status: "Próximamente",
  },
];

export interface Pillar {
  /** Pillar code, e.g. "OBJ" */
  code: string;
  title: string;
  /** Short supporting text (optional — "Funciones" uses `items`) */
  description?: string;
  /** Bulleted list of responsibilities */
  items?: string[];
  /** Width within the pillar grid */
  span?: "full" | "half";
  /** Emphasised "lead" treatment */
  lead?: boolean;
  icon: LucideIcon;
}

export const pillars: Pillar[] = [
  {
    code: "OBJ",
    title: "Objetivo",
    lead: true,
    span: "full",
    description:
      "Liderar la adopción de IA para potenciar la colaboración en las redes de valor.",
    icon: Target,
  },
  {
    code: "ROL",
    title: "Rol LOGYCA",
    span: "half",
    description:
      "Articulador neutral y de confianza; facilita estándares, protocolos, gobernanza, capacidades y experimentación.",
    icon: Handshake,
  },
  {
    code: "2026",
    title: "Meta 2026",
    span: "half",
    description:
      "Consolidar un plan estratégico del Comité para presentar al Consejo Directivo en noviembre.",
    icon: Flag,
  },
  {
    code: "FUN",
    title: "Funciones del comité",
    span: "full",
    items: [
      "Articular actores",
      "Desarrollar guías, manuales y protocolos",
      "Compartir información y buenas prácticas",
      "Implementar pilotos y validar herramientas",
      "Monitorear avances con indicadores comunes",
    ],
    icon: ListChecks,
  },
];
