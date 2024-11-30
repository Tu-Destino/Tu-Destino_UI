import { ReactNode } from "react";

export function identity<T>(value:T){
  return value
}



export type ElementProps = {
  element: ReactNode;
  list: string[];
  titles: string[];
};
export type StringProp = {
  element: string;
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

export type PlaceDataProps = {
  id: number;
  enum_type: string; // Puedes agregar otros valores posibles aquí si los hay
  title: string;
  details: string;
  price: string;//3
  schedule: string;//2
  address: string;// 1
  link_address: string;
  vr: string;
  web: string;//6
  phone: string;//5
  rate: number;// 4
  information: string;
  btn_url: string;
};