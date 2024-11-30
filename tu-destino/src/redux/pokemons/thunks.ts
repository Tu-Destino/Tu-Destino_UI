import { AppDispatch } from "../store";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingPokemons());

    //TODO: Realizar peticion http

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const data = await resp.json();
    console.log(data.results);

    setTimeout(()=> dispatch(setPokemons({page: page + 1, pokemons: data.results} ) ),3000 )

    //dispatch(setPokemons())
  };
};

export default getPokemons;
