import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initState {
  listTitle: string[];
  isLoading: boolean
}

const initialState: initState = {
  listTitle: [],
  isLoading: false
};

export const listTitlesSlice = createSlice({
  name: 'listPlaces',
  initialState,
  reducers: {
    startLoadingList: (state) => {
      state.isLoading = true;
    },
    setListTitle: (state, action: PayloadAction<{listTitle: string[] }>) => {
      state.isLoading = false;
      
      state.listTitle = action.payload.listTitle;
    }
  },
});

export default listTitlesSlice.reducer;
export const { setListTitle,startLoadingList } = listTitlesSlice.actions;

