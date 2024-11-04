import { ReactNode } from "react";

export type ElementProps = {
  element: ReactNode;
  list: string[];
  titles: string[];
};

export type IconsProps = {
  Component: ReactNode;
  list: string[];
};
export type AddPostProps={
  list:string[];
  titles:string[];
}
export type AutocompleteProps = {
  suggestions: string[];
};
export type FiltersType = {
  suggestions: string[];
  select: string[];
  setStateValue: React.Dispatch<React.SetStateAction<string[]>>;
};

export type TagsProps = {
  labels: string;
};

export type ButtomPromp = {
  tag: string;
  handleCLick: (tag: string) => void;
};

export type Post = {
  urlImg: string;
  title: string;
  description:string;
};
export type NewPost ={
  "title": string,
  "description": string,
  "tags": string,
  "urlImg": string |ArrayBuffer | null,
}
export type Details = {
  img: string[];
  title: string;
  info: string;
};
export type CardImgProps = {
  place: Post;
};

export type GalleryProps = {
  initialPlaces: Post[];
};

export type IconWithNickname = {
  icon: React.ReactElement;
  nickname: string;
};
export type ColorWithNickname = {
  color: string;
  nickname: string;
};

export type LinkUrlProps = {
  name: string;
  url: string;
};

export type PlaceProps = {
  title: string;
  description: string;
  link: string;
  img: string;
  altImg: string;
};
