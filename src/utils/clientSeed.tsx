import type { ClientProp, TechStack } from "./types";
import { CgWebsite } from "react-icons/cg";

import centroamai from "@assets/images/clients/centroamai.png";
import progress from "@assets/images/clients/progresscap.png";

import {
  SiAstro,
  SiMercadopago,
  SiPhp,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import { FaMdb } from "react-icons/fa";

const createClient = (
  title: string,
  description: string,
  image: ImageMetadata,
  webLink: string,
  techStack: TechStack[],
): ClientProp => {
  return {
    title,
    description,
    image,
    buttons: [
      {
        title: "Web",
        icon: CgWebsite,
        link: webLink,
      },
    ],
    techStack,
  };
};

const clientSeed: ClientProp[] = [
  createClient(
    "Centro Amaï",
    "Landing page moderna y funcional para el Centro Amaï, centro médico terapéutico ubicado en La Serena, Chile",
    centroamai,
    "https://new.centroamai.cl/",
    [
      {
        title: "Astro",
        icon: SiAstro,
      },
      {
        title: "React",
        icon: SiReact,
      },
      {
        title: "Tailwindcss",
        icon: SiTailwindcss,
      },
      {
        title: "Shadcn/UI",
        icon: SiShadcnui,
      },
    ],
  ),
  createClient(
    "OTEC Progress",
    "Landing page OTEC Progress, centro de capacitación en La Serena, Chile, con integración de Mercado Pago.",
    progress,
    "https://www.progresscap.cl",
    [
      {
        title: "Php",
        icon: SiPhp,
      },
      {
        title: "MdBootstrap",
        icon: FaMdb,
      },
      {
        title: "Mercado Pago",
        icon: SiMercadopago,
      },
    ],
  ),
];

export { clientSeed };
