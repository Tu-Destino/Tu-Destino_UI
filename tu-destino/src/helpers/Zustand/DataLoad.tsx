import { Post } from "@/types/types";
import { create } from "zustand";

interface DataState {
  places: object[];
  postDiscover: Post[];
  optionSearch: string[];
  tags: string[];
  setPlaces: (places: object[]) => void;
  setPostDiscover: (postDiscover: Post[]) => void;
  setOptionSearch: (optionSearch: string[]) => void;
  setTags: (tags: string[]) => void;
}

const useData = create<DataState>((set) => ({
  places: [],
  postDiscover: [],
  optionSearch: [],
  tags: [],
  setPlaces: (places) => set({ places }),
  setPostDiscover: (postDiscover) => set({ postDiscover }),
  setOptionSearch: (optionSearch) => set({ optionSearch }),
  setTags: (tags) => set({ tags }),
}));

export default useData;
