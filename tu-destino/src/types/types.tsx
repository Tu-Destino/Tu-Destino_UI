import { ReactNode } from "react";

export function identity<T>(value: T) {
  return value;
}

type ConcatenatePrefix<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
};

export type ElementProps<Prefix extends string> = ConcatenatePrefix<
  {
    element: React.ReactNode;
    list: string[];
    titles: string[];
  },
  Prefix
>;

export type IconsProps = {
  Component: ReactNode;
  list: string[];
};
export type AddPostProps = {
  list: string[];
  titles: string[];
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

export type ButtomPromp = {
  tag: string;
  handleCLick: (tag: string) => void;
};

export type Post = {
  urlImg: string;
  title: string;
  description: string;
};
export type NewPost = {
  title: string;
  description: string;
  tags: string;
  urlImg: string | ArrayBuffer | null;
};
export type Details = {
  img: string[];
  title: string;
  info: string;
};
export interface CreatePost {
  title: string;
  description: string;
  place_id: number | null;
  tags: string;
  urlImg: string | ArrayBuffer | null;
  user_id: string
}

export interface AlertPostProps extends TagsProps { 
  handleClick: () => void;
}
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
export type Place = {
  name: string;
  img: string;
  type: string;
};

export type PlaceDataProps = {
  id: number;
  enum_type: string;
  title: string;
  details: string;
  price: string;
  schedule: string;
  address: string;
  link_address: string;
  vr: string;
  web: string;
  phone: string;
  rate: number;
  information: string;
  btn_url: string;
};
