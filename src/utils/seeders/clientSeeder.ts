import { CgWebsite } from "react-icons/cg";

import mundi from "@assets/images/clients/centromundi.png";
import progress from "@assets/images/clients/progresscap.png";
import sanignacio from "@assets/images/clients/sanignacio.png";
import { TECH_STACKS } from "./stackSeeder";
import type { ProjectProp } from "@utils/types";

export const clientSeeder: ProjectProp[] = [
  {
    nameEs: "Centro Mundi",
    nameEn: "Mundi Center",
    descriptionEs:
      "Landing page moderna para mundi.cl, centro multidisciplinario para el neurodesarrollo ubicado en La Serena, Chile.",
    descriptionEn:
      "Modern and functional landing page for mundi.cl, a multidisciplinary center for neurodevelopment located in La Serena, Chile.",
    coverImage: mundi,
    buttonLinks: [
      {
        title: "Web",
        icon: CgWebsite,
        link: "https://www.mundi.cl",
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
