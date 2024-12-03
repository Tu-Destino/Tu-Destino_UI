import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import listTitlesReducer from "./listTitles/listTitlesSlice";
import { todoApi } from "./apis/todosApi";
import { placeApi } from "./apis/placeApi";
import { AllTagsApi } from "./apis/AllTagsApi";
import { postApi } from "./apis/postApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listTitles: listTitlesReducer,
    //place: placeReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [placeApi.reducerPath]: placeApi.reducer,
    [AllTagsApi.reducerPath]: AllTagsApi.reducer,
    [postApi.reducerPath]: postApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoApi.middleware)
      .concat(placeApi.middleware)
      .concat(AllTagsApi.middleware)
      .concat(postApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
