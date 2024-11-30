import { AppDispatch } from "../store";
import { setListTitle, startLoadingList } from "./listTitlesSlice";

const urlBase = "http://49.13.164.207:8080/TD/api/v1"

export const getListTitle = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoadingList());

    //TODO: Realizar peticion http

    const resp = await fetch(urlBase+"/place/getListTitle");
    const data = await resp.json();

    dispatch(setListTitle({listTitle: data}) )

    //dispatch(setPokemons())
  };
};

export default getListTitle;
