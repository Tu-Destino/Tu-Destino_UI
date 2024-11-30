// import { AppDispatch } from "../store";
// import { setPlace, startLoadingPlace } from "./placesSlice";

// const urlBase = "http://49.13.164.207:8080/TD/api/v1"

// export const getPLace = (title: string) => {
//   return async (dispatch: AppDispatch) => {
//     dispatch(startLoadingPlace());

//     //TODO: Realizar peticion http

//     console.log("pera"+ title);
    
//     const resp = await fetch(urlBase+"/place/findTitle/"+title);
//     const data = await resp.json();

//     dispatch(setPlace({place: data}) )

//     //dispatch(setPokemons())
//   };
// };

// export default getPLace;
