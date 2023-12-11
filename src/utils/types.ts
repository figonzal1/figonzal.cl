import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons";

export type ProjectProp = {
  title: string;
  description: string;
  image: ImageMetadata;
  buttons: {
    title: string;
    icon: IconType;
    link: string;
  }[];
};
