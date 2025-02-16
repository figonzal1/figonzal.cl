import { CgWebsite } from "react-icons/cg";

import amai from "@assets/images/clients/centroamai.png";
import progress from "@assets/images/clients/progresscap.png";
import sanignacio from "@assets/images/clients/sanignacio.png";
import { TECH_STACKS } from "./stackSeeder";
import type { ProjectProp } from "@utils/types";

export const clientSeeder: ProjectProp[] = [
  {
    nameEs: "Centro Amaï",
    nameEn: "Amaï Center",
    descriptionEs:
      "Landing page moderna y funcional para el Centro Amaï, centro médico terapéutico ubicado en La Serena, Chile.",
    descriptionEn:
      "Modern and functional landing page for the Amaï Center, a medical therapy center located in La Serena, Chile.",
    coverImage: amai,
    buttonLinks: [
      {
        title: "Web",
        icon: CgWebsite,
        link: "https://lopez-eguiluz-ltda.github.io/centroamai.cl/",
      },
    ],
    techStack: [
      TECH_STACKS.ASTRO,
      TECH_STACKS.REACT,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.SHADCN_UI,
      TECH_STACKS.GITHUB_ACTIONS,
    ],
  },
  {
    nameEs: "OTEC Progress",
    nameEn: "OTEC Progress",
    descriptionEs:
      "Landing page OTEC Progress, centro de capacitación en La Serena, Chile, con integración de Mercado Pago.",
    descriptionEn:
      "Landing page OTEC Progress, training center in La Serena, Chile, with Mercado Pago integration.",
    coverImage: progress,
    buttonLinks: [
      {
        title: "Web",
        icon: CgWebsite,
        link: "https://www.progresscap.cl/",
      },
    ],
    techStack: [
      TECH_STACKS.PHP,
      TECH_STACKS.MDBOOTSTRAP,
      TECH_STACKS.MERCADO_PAGO,
    ],
  },

  {
    nameEs: "Colegio San Ignacio Cqbo",
    nameEn: "San Ignacio School",
    descriptionEs:
      "Blog web autoadministrable. Desarrollado con Astro y WordPress headless.",
    descriptionEn:
      "Self-manageable blog website. Developed with Astro and WordPress headless.",

    coverImage: sanignacio,
    buttonLinks: [
      {
        title: "Web",
        icon: CgWebsite,
        link: "https://www.sanignacio-coquimbo.cl",
      },
    ],
    techStack: [
      TECH_STACKS.WORDPRESS,
      TECH_STACKS.ASTRO,
      TECH_STACKS.REACT,
      TECH_STACKS.GRAPHQL,
      TECH_STACKS.TAILWIND,
      TECH_STACKS.SHADCN_UI,
      TECH_STACKS.GITHUB_ACTIONS,
    ],
  },
];
