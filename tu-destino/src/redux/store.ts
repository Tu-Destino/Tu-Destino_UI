import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemons/pokemonSlice";
import counterReducer from "./counter/counterSlice";
import listTitlesReducer from "./listTitles/listTitlesSlice";
import { todoApi } from "./apis/todosApi";
import { placeApi } from "./apis/placeApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,
    listTitles: listTitlesReducer,
    //place: placeReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [placeApi.reducerPath]: placeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(todoApi.middleware)
      .concat(placeApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
