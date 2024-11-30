import { Place, PlaceDataProps, Post } from "@/types/types";
import { create } from "zustand";

interface DataState {
  places: PlaceDataProps[];
  postDiscover: Post[];
  optionSearch: string[];
  tags: string[];
  dataPlace: Place[];
  setPlaces: (places: PlaceDataProps[]) => void;
  setPostDiscover: (postDiscover: Post[]) => void;
  setOptionSearch: (optionSearch: string[]) => void;
  setTags: (tags: string[]) => void;
  setDataPlace: (dataPlace: Place[]) => void;
}

const useData = create<DataState>((set) => ({
  places: [],
  postDiscover: [],
  optionSearch: [],
  tags: [],
  dataPlace: [],
  setPlaces: (places) => set({ places }),
  setPostDiscover: (postDiscover) => set({ postDiscover }),
  setOptionSearch: (optionSearch) => set({ optionSearch }),
  setTags: (tags) => set({ tags }),
  setDataPlace: (dataPlace) => set({ dataPlace }),
}));

export default useData;
