import type { ClientProp, ProjectProp } from "./types";
import { CgWebsite } from "react-icons/cg";

import centroamai from "@assets/images/clients/centroamai.png";
import { SiAstro, SiReact } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const createClient = (
  title: string,
  description: string,
  image: ImageMetadata,
  webLink: string,
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
    techStack: [
      {
        title: "Astro",
        icon: SiAstro,
      },
      {
        title: "React",
        icon: SiReact,
      },
    ],
  };
};

const clientSeed: ClientProp[] = [
  createClient(
    "Centro Amaï",
    "Landing page moderna y funcional para el Centro Amaï, centro médico terapéutico ubicado en La Serena, Chile",
    centroamai,
    "https://new.centroamai.cl/",
    [],
  ),
];

export { clientSeed };
