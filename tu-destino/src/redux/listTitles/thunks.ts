import { AppDispatch } from "../store";
import { setListTitle, startLoadingList } from "./listTitlesSlice";

const urlBase = "https://tudestinoresourse.coalmd.com/TD/api/v1"

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
