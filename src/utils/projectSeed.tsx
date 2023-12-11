import { FaGithub } from "react-icons/fa6/index.js";
import { SiGoogleplay } from "react-icons/si/index.js";
import type { ProjectProp } from "./types";
import lqch from "@assets/images/projects/lqch.png";
import aaid from "@assets/images/projects/aaid.png";
import evalua from "@assets/images/projects/evalua.png";

const projectSeed: ProjectProp[] = [
  {
    title: "LastQuakeChile - Sismos en Chile",
    description:
      "Es una app donde podrás conocer los últimos sismos ocurridos en Chile y recibir notificaciones rápidamente en tu celular.",
    image: lqch,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://www.github.com/figonzal1/LastQuakeChile",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.lastquakechile",
      },
    ],
  },
  {
    title: "AAID",
    description:
      "Esta aplicación permite al usuario encontrar el código AAID de su dispositivo Android con la opción de copiarlo fácilmente y compartirlo a través de otras aplicaciones.",
    image: aaid,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://github.com/figonzal1/AAID",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.aaid",
      },
    ],
  },
  {
    title: "EvalúaTool - Calculadora v2 cL",
    description:
      "Aplicación móvil que facilita el cálculo de puntuaciones de evaluaciones pertenecientes a la batería de evaluaciones psicopedagógicas Evalúa - Chile Versión 2.0",
    image: evalua,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://github.com/figonzal1/Evaluatool",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.evaluatool",
      },
    ],
  },
];

const projectSeedEn: ProjectProp[] = [
  {
    title: "LastQuakeChile - Quakes in Chile",
    description:
      "It is an app where you can find out about the latest earthquakes that have occurred in Chile and receive notifications quickly on your cell phone.",
    image: lqch,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://www.github.com/figonzal1/LastQuakeChile",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.lastquakechile",
      },
    ],
  },
  {
    title: "AAID",
    description:
      "This application allows the user to find the AAID code of their Android device with the option to easily copy it and share it through other applications.",
    image: aaid,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://github.com/figonzal1/AAID",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.aaid",
      },
    ],
  },
  {
    title: "EvalúaTool - Calculator v2 cL",
    description:
      "Mobile application that facilitates the calculation of evaluation scores belonging to the battery of psychopedagogical evaluations Evalúa - Chile Version 2.0",
    image: evalua,
    buttons: [
      {
        title: "Github",
        icon: FaGithub,
        link: "https://github.com/figonzal1/Evaluatool",
      },
      {
        title: "App",
        icon: SiGoogleplay,
        link: "https://play.google.com/store/apps/details?id=cl.figonzal.evaluatool",
      },
    ],
  },
];

export { projectSeed, projectSeedEn };
