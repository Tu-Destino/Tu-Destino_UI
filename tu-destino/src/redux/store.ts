import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import listTitlesReducer from "./listTitles/listTitlesSlice";
import { placeApi } from "./apis/placeApi";
import { postApi } from "./apis/postApi";
import { tagsApi } from "./apis/tagsApi";
import postShowDiscoverReducer  from "./postsShowDiscover/postsShowDiscoverSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listTitles: listTitlesReducer,
    postShowDiscover: postShowDiscoverReducer,

    //place: placeReducer,
    [placeApi.reducerPath]: placeApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [postApi.reducerPath]: postApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(placeApi.middleware)
      .concat(tagsApi.middleware)
      .concat(postApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
