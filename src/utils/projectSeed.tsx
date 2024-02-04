import { FaGithub } from "react-icons/fa6/index.js";
import { SiGoogleplay } from "react-icons/si/index.js";
import type { ProjectProp } from "./types";
import lqch from "@assets/images/projects/lqch.png";
import aaid from "@assets/images/projects/aaid.png";
import evalua from "@assets/images/projects/evalua.png";

const createProject = (
  title: string,
  description: string,
  image: ImageMetadata,
  githubLink: string,
  appLink: string,
) => {
  return {
    title,
    description,
    image,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: githubLink,
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: appLink,
      },
    ],
  };
};

const GITHUB = "https://github.com/figonzal1";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=";

const LQCH_GITHUB = GITHUB + "LastQuakeChile";
const LQCH_GOOGLE_PLAY = GOOGLE_PLAY + "cl.figonzal.lastquakechile";

const AAID_GITHUB = GITHUB + "AAID";
const AAID_GOOGLE_PLAY = GOOGLE_PLAY + "cl.figonzal.aaid";

const EVALUA_GITHUB = GITHUB + "Evaluatool";
const EVALUA_GOOGLE_PLAY = GOOGLE_PLAY + "cl.figonzal.evaluatool";

const projectSeed: ProjectProp[] = [
  createProject(
    "LastQuakeChile - Sismos en Chile",
    "Es una app donde podrás conocer los últimos sismos ocurridos en Chile y recibir notificaciones rápidamente en tu celular.",
    lqch,
    LQCH_GITHUB,
    LQCH_GOOGLE_PLAY,
  ),
  createProject(
    "AAID",
    "Esta aplicación permite al usuario encontrar el código AAID de su dispositivo Android con la opción de copiarlo fácilmente y compartirlo a través de otras aplicaciones.",
    aaid,
    AAID_GITHUB,
    AAID_GOOGLE_PLAY,
  ),
  createProject(
    "EvalúaTool - Calculadora v2 CL",
    "Aplicación móvil que facilita el cálculo de puntuaciones de evaluaciones pertenecientes a la batería de evaluaciones psicopedagógicas Evalúa - Chile Versión 2.0",
    evalua,
    EVALUA_GITHUB,
    EVALUA_GOOGLE_PLAY,
  ),
];

const projectSeedEn: ProjectProp[] = [
  createProject(
    "LastQuakeChile - Quakes in Chile",
    "It is an app where you can find out about the latest earthquakes that have occurred in Chile and receive notifications quickly on your cell phone.",
    lqch,
    LQCH_GITHUB,
    LQCH_GOOGLE_PLAY,
  ),
  createProject(
    "AAID",
    "This application allows the user to find the AAID code of their Android device with the option to easily copy it and share it through other applications.",
    aaid,
    AAID_GITHUB,
    AAID_GOOGLE_PLAY,
  ),
  createProject(
    "EvalúaTool - Calculator v2 CL",
    "Mobile application that facilitates the calculation of evaluation scores belonging to the battery of psychopedagogical evaluations Evalúa - Chile Version 2.0",
    evalua,
    EVALUA_GITHUB,
    EVALUA_GOOGLE_PLAY,
  ),
];

export { projectSeed, projectSeedEn };
