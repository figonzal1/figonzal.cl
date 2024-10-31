import { SiGithub, SiGoogleplay } from "react-icons/si";
import { Constants } from "../constants";
import { TECH_STACKS } from "./stackProvider";
import { translations } from "../translations";

import lqch from "@assets/images/projects/lqch.png";
import aaid from "@assets/images/projects/aaid.png";
import evalua from "@assets/images/projects/evalua.png";

import type { ProjectProp, ProjectProvider } from "../types";

const projectProvider: ProjectProvider = {
  LQCH: {
    nameEs: translations.es.LQCH.NAME,
    nameEn: translations.en.LQCH.NAME,
    descriptionEs: translations.es.LQCH.DESCRIPTION,
    descriptionEn: translations.en.LQCH.DESCRIPTION,
    coverImage: lqch,
    buttonLinks: [
      {
        title: "Github",
        icon: SiGithub,
        link: Constants.GITHUB + "LastQuakeChile",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: Constants.GOOGLE_PLAY + "cl.figonzal.lastquakechile",
      },
    ],
    techStack: [
      TECH_STACKS.ANDROID,
      TECH_STACKS.SPRING_BOOT,
      TECH_STACKS.DOCKER,
    ],
  },
  AAID: {
    nameEs: translations.es.AAID.NAME,
    nameEn: translations.en.AAID.NAME,
    descriptionEs: translations.es.AAID.DESCRIPTION,
    descriptionEn: translations.en.AAID.DESCRIPTION,
    coverImage: aaid,
    buttonLinks: [
      {
        title: "Github",
        icon: SiGithub,
        link: Constants.GITHUB + "AAID",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: Constants.GOOGLE_PLAY + "cl.figonzal.aaid",
      },
    ],
    techStack: [TECH_STACKS.ANDROID],
  },
  EVALUA: {
    nameEs: translations.es.EVALUA.NAME,
    nameEn: translations.en.EVALUA.NAME,
    descriptionEs: translations.es.EVALUA.DESCRIPTION,
    descriptionEn: translations.en.EVALUA.DESCRIPTION,
    coverImage: evalua,
    buttonLinks: [
      {
        title: "Github",
        icon: SiGithub,
        link: Constants.GITHUB + "evaluatool",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: Constants.GOOGLE_PLAY + "cl.figonzal.evaluatool",
      },
    ],
    techStack: [TECH_STACKS.ANDROID],
  },
};

export const projectSeed: ProjectProp[] = [
  projectProvider.LQCH,
  projectProvider.AAID,
  projectProvider.EVALUA,
];
