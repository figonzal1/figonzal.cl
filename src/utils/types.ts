import type { IconType } from "react-icons";

export type ProjectProp = {
  title: string;
  description: string;
  image: string;
  buttons: {
    title: string;
    icon: IconType;
    link: string;
  }[];
};
