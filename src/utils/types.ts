import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons";

export type ProjectSeeder = {
  LQCH: ProjectProp;
  AAID: ProjectProp;
  EVALUA: ProjectProp;
};

export type ProjectCategory = "web" | "mobile";

export type ClientProp = {
  nameEs: string;
  nameEn: string;
  descriptionEn: string;
  descriptionEs: string;
  coverImage: ImageMetadata;
  buttonLinks: ProjectButton[];
  techStack: ProjectStack[];
};

export type ProjectProp = ClientProp & {
  category: ProjectCategory;
};

export type ProjectButton = {
  title: string;
  icon: IconType;
  link: string;
};

export type ProjectStack = {
  title: string;
  icon: IconType;
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
