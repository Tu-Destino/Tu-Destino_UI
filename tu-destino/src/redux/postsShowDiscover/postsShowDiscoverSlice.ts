import { Post } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initState {
  isLoading: boolean
  posts: Post[];
}

const initialState: initState = {
  posts: [],
  isLoading: false
};

export const postSlice = createSlice({
  name: "postsShowDiscover",
  initialState,
  reducers: {
    startLoadingPostShow: (state) => {
      state.isLoading = true;
    },
    setPostShowDiscover: (state, action: PayloadAction<{ posts: Post[] }>) => {
      state.isLoading = false;
      state.posts = action.payload.posts;
    },
    cleanPostShowDiscover: (state) => {
      state.posts = [];
    },
  },
});

export default postSlice.reducer;
export const { startLoadingPostShow, setPostShowDiscover , cleanPostShowDiscover} = postSlice.actions;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface initState {
//   listTitle: string[];
//   isLoading: boolean
// }

// const initialState: initState = {
//   listTitle: [],
//   isLoading: false
// };

// export const listTitlesSlice = createSlice({
//   name: 'listPlaces',
//   initialState,
//   reducers: {
//     startLoadingList: (state) => {
//       state.isLoading = true;
//     },
//     setListTitle: (state, action: PayloadAction<{listTitle: string[] }>) => {
//       state.isLoading = false;

//       state.listTitle = action.payload.listTitle;
//     }
//   },
// });

// export default listTitlesSlice.reducer;
// export const { setListTitle,startLoadingList } = listTitlesSlice.actions;
