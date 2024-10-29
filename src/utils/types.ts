import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons";

export type ProjectProp = {
  title: string;
  description: string;
  image: ImageMetadata;
  linkButtons: ProjectButton[];
  techStack: TechStack[];
};

export type GithubProp = {
  commitMsg: string;
  labels: {
    months: [];
    weekdays: [];
    totalCount: string;
    legend: {
      less: string;
      more: string;
    };
  };
};

export type ProjectButton = {
  title: string;
  icon: IconType;
  link: string;
};

export type TechStack = {
  title: string;
  icon: IconType;
};
