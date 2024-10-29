import { FaGithub } from "react-icons/fa6";
import {
  SiAndroid,
  SiDocker,
  SiGoogleplay,
  SiSpringboot,
} from "react-icons/si";
import type { ProjectButton, ProjectProp, TechStack } from "./types";
import lqch from "@assets/images/projects/lqch.png";
import aaid from "@assets/images/projects/aaid.png";
import evalua from "@assets/images/projects/evalua.png";
import Constants from "./constants";
import { translations } from "./translations";

const createProject = (
  title: string,
  description: string,
  image: ImageMetadata,
  linkButtons: ProjectButton[],
  techStack: TechStack[],
): ProjectProp => {
  return {
    title,
    description,
    image,
    linkButtons,
    techStack,
  };
};

/**
 * LQCH
 */
const LQCH_NAME_EN = "LastQuakeChile - Quakes in Chile";
const LQCH_DESCRIPTION_EN =
  "It is an app where you can find out about the latest earthquakes that have occurred in Chile and receive notifications quickly on your cell phone.";
const LQCH_LINKS = {
  github: Constants.GITHUB + "LastQuakeChile",
  googlePlay: Constants.GOOGLE_PLAY + "cl.figonzal.lastquakechile",
};

const LQCH_TECH_STACK = [
  {
    title: "Android - Kotlin",
    icon: SiAndroid,
  },
  {
    title: "SpringBoot - Java",
    icon: SiSpringboot,
  },
  {
    title: "Docker",
    icon: SiDocker,
  },
];

const lqch_es = createProject(
  translations.es.LQCH.LQCH_NAME,
  translations.es.LQCH.LQCH_DESCRIPTION,
  lqch,
  [
    {
      title: "Github",
      icon: FaGithub,
      link: LQCH_LINKS.github,
    },
    {
      title: "App",
      icon: SiGoogleplay,
      link: LQCH_LINKS.googlePlay,
    },
  ],
  LQCH_TECH_STACK,
);

const AAID_GITHUB = GITHUB + "AAID";
const AAID_GOOGLE_PLAY = GOOGLE_PLAY + "cl.figonzal.aaid";

const EVALUA_GITHUB = GITHUB + "Evaluatool";
const EVALUA_GOOGLE_PLAY = GOOGLE_PLAY + "cl.figonzal.evaluatool";

const projectSeed: ProjectProp[] = [
  lqch_es,
  createProject(
    "AAID",
    "App para encontrar el código AAID de su dispositivo Android, puedes compartirlo a través de otras aplicaciones.",
    aaid,
    [
      {
        title: "Github",
        icon: FaGithub,
        link: AAID_GITHUB,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: AAID_GOOGLE_PLAY,
      },
    ],
    [
      {
        title: "Android",
        icon: SiAndroid,
      },
    ],
  ),
  createProject(
    "EvalúaTool - Calculadora v2 CL",
    "App para simplificar evaluaciones de la batería de evaluaciones psicopedagógicas Evalúa - Chile V2.0",
    evalua,
    [
      {
        title: "Github",
        icon: FaGithub,
        link: EVALUA_GITHUB,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: EVALUA_GOOGLE_PLAY,
      },
    ],
    [
      {
        title: "Android - Kotlin",
        icon: SiAndroid,
      },
    ],
  ),
];

const projectSeedEn: ProjectProp[] = [
  createProject(
    "LastQuakeChile - Quakes in Chile",
    "It is an app where you can find out about the latest earthquakes that have occurred in Chile and receive notifications quickly on your cell phone.",
    lqch,
    [
      {
        title: "Github",
        icon: FaGithub,
        link: LQCH_GITHUB,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: LQCH_GOOGLE_PLAY,
      },
    ],
    [
      {
        title: "Android - Kotlin",
        icon: SiAndroid,
      },
    ],
  ),
  createProject(
    "AAID",
    "This application allows the user to find the AAID code of their Android device with the option to easily copy it and share it through other applications.",
    aaid,
    [
      {
        title: "Github",
        icon: FaGithub,
        link: AAID_GITHUB,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: AAID_GOOGLE_PLAY,
      },
    ],
    [
      {
        title: "Android",
        icon: SiAndroid,
      },
    ],
  ),
  createProject(
    "EvalúaTool - Calculator v2 CL",
    "Mobile application that facilitates the calculation of evaluation scores belonging to the battery of psychopedagogical evaluations Evalúa - Chile Version 2.0",
    evalua,
    [
      {
        title: "Github",
        icon: FaGithub,
        link: EVALUA_GITHUB,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: EVALUA_GOOGLE_PLAY,
      },
    ],
    [
      {
        title: "Android",
        icon: SiAndroid,
      },
    ],
  ),
];

export { projectSeed, projectSeedEn };
