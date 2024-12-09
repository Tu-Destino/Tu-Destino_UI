import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import listTitlesReducer from "./listTitles/listTitlesSlice";
import { todoApi } from "./apis/todosApi";
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
    [todoApi.reducerPath]: todoApi.reducer,
    [placeApi.reducerPath]: placeApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [postApi.reducerPath]: postApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoApi.middleware)
      .concat(placeApi.middleware)
      .concat(tagsApi.middleware)
      .concat(postApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
