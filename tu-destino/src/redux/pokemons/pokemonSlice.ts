import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CounterState {
  page: number,
  pokemons: any[],
  isLoading: boolean
}

const initialState: CounterState = {
  page: 0,
  pokemons: [],
  isLoading: false
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<{page:number,pokemons: [] }>)=>{
      state.isLoading = false;
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
export const selectPokemons = (state: RootState) => state.pokemons.pokemons
export default pokemonSlice.reducer;

