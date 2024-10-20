import { ReactNode } from "react";

export type ElementProps ={
  element: ReactNode;
}

export type IconsProps={
  Component: ReactNode;
  list: string;
};
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

export type ButtomPromp={
  tag: string;
  handleCLick:(tag : string) => void;
};

export type Place = {
  img: string;
  name: string;
};

export type Details={
  img:string[];
  title:string;
  info: string;
};
export type CardImgProps = {
  place: Place;
};

export type GalleryProps = {
  initialPlaces: Place[];
};

export type IconWithNickname = {
  icon: React.ReactElement;
  nickname: string;
};
export type ColorWithNickname = {
  color: string;
  nickname: string;
};