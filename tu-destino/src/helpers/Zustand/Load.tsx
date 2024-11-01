import { getAll } from "../FetchData";
import useData from "./DataLoad";

export const loadVerify = async () => {
  const state = useData.getState();

  if (state.optionSearch.length === 0) {
    const optionSearch = await getAll("/place/listTitle");
    state.setOptionSearch(optionSearch);
    console.log("Api");
    console.log(optionSearch);
  }

  if (state.tags.length === 0) {
    const tags = await getAll("/postDiscover/AllTags");
    state.setTags(tags);
    console.log("Api");
    console.log(tags);
  }

  if (state.places.length === 0) {
    const places = await getAll("/place");
    state.setPlaces(places);
    console.log("Api");
    console.log(places);
  }

  if (state.postDiscover.length === 0) {
    const postDiscover = await getAll("/postDiscover");
    state.setPostDiscover(postDiscover);
    console.log("Api");
    console.log(postDiscover);
  }
};
