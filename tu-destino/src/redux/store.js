import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import counterSlice from "./counterSlice.js"


export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterSlice
  }
})