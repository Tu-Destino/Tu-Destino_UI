import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state , action: PayloadAction<{numberIncrement:number}>) => {
      const {numberIncrement} = action.payload
      state.value += numberIncrement;
    },
  },
});

export const { increment,decrement,incrementBy } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer;


