import { SiGithub, SiGoogleplay } from "react-icons/si";
import { Constants } from "../constants";
import { TECH_STACKS } from "./stackSeeder";

import lqch from "@assets/images/projects/lqch.png";
import aaid from "@assets/images/projects/aaid.png";
import evalua from "@assets/images/projects/evalua.png";

import type { ProjectProp } from "../types";
import { projectTranslations } from "../translations";

export const projectSeeder: ProjectProp[] = [
  {
    nameEs: projectTranslations.es.LQCH.NAME,
    nameEn: projectTranslations.en.LQCH.NAME,
    descriptionEs: projectTranslations.es.LQCH.DESCRIPTION,
    descriptionEn: projectTranslations.en.LQCH.DESCRIPTION,
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
      TECH_STACKS.GITHUB_ACTIONS,
    ],
  },
  {
    nameEs: projectTranslations.es.AAID.NAME,
    nameEn: projectTranslations.en.AAID.NAME,
    descriptionEs: projectTranslations.es.AAID.DESCRIPTION,
    descriptionEn: projectTranslations.en.AAID.DESCRIPTION,
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
  {
    nameEs: projectTranslations.es.EVALUA.NAME,
    nameEn: projectTranslations.en.EVALUA.NAME,
    descriptionEs: projectTranslations.es.EVALUA.DESCRIPTION,
    descriptionEn: projectTranslations.en.EVALUA.DESCRIPTION,
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
];
