import {
  Activity,
  Bone,
  Eye,
  HeartPulse,
  Microscope,
  Scissors,
  ShieldPlus,
  Stethoscope,
  Syringe,
} from "lucide-react";

import type { CardItem, Testimonial } from "./types";

const iconClassName = "h-8 w-8";

export const services: CardItem[] = [
  {
    title: "Emergência",
    description:
      "Pronto atendimento 24 horas para casos de urgência e emergência veterinária.",
    icon: <HeartPulse className={iconClassName} />,
  },
  {
    title: "Consultas",
    description:
      "Atendimento clínico completo com veterinários experientes.",
    icon: <Stethoscope className={iconClassName} />,
  },
  {
    title: "Exames",
    description:
      "Laboratório próprio com exames de sangue, urina, fezes, ultrassom e raio-x.",
    icon: <Microscope className={iconClassName} />,
  },
  {
    title: "Cirurgias",
    description:
      "Centro cirúrgico equipado para procedimentos de rotina e casos complexos.",
    icon: <Scissors className={iconClassName} />,
  },
  {
    title: "Especialidades",
    description:
      "Cardiologia, dermatologia, ortopedia, oftalmologia e outras.",
    icon: <ShieldPlus className={iconClassName} />,
  },
  {
    title: "Vacinação",
    description:
      "Protocolo completo de vacinação para cães e gatos.",
    icon: <Syringe className={iconClassName} />,
  },
];

export const specialties: CardItem[] = [
  {
    title: "Cardiologia Veterinária",
    description:
      "Avaliação cardíaca precisa para cães e gatos com acompanhamento especializado.",
    icon: <Activity className={iconClassName} />,
  },
  {
    title: "Dermatologia",
    description:
      "Investigação e tratamento de alergias, lesões cutâneas e doenças dermatológicas.",
    icon: <ShieldPlus className={iconClassName} />,
  },
  {
    title: "Ortopedia",
    description:
      "Diagnóstico, planejamento cirúrgico e reabilitação para mobilidade e qualidade de vida.",
    icon: <Bone className={iconClassName} />,
  },
  {
    title: "Oftalmologia",
    description:
      "Cuidado especializado para visão, superfície ocular e prevenção de complicações.",
    icon: <Eye className={iconClassName} />,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "A Sanus Vet salvou meu gato em uma madrugada. Atendimento rápido, humano e extremamente profissional.",
    author: "Mariana e Chico",
  },
  {
    quote:
      "Estrutura impecável, equipe acolhedora e exames resolvidos no mesmo dia. Passamos a confiar totalmente na clínica.",
    author: "Carlos e Luna",
  },
  {
    quote:
      "Desde a vacinação até o acompanhamento com especialista, sempre fomos muito bem atendidos.",
    author: "Patrícia e Thor",
  },
];
