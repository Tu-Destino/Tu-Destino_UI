import { getAll } from "../FetchData";
import useData from "./DataLoad";

const loadOptionSearch = async () => {
  const state = useData.getState();
  if (state.optionSearch.length === 0) {
    const optionSearch = await getAll("/place/getListTitle");
    state.setOptionSearch(optionSearch);
    console.log("Api");
    console.log(optionSearch);
  }
};

const loadTags = async () => {
  const state = useData.getState();
  if (state.tags.length === 0) {
    const tags = await getAll("/postDiscover/AllTags");
    state.setTags(tags);
    console.log("Api");
    console.log(tags);
  }
};

const loadPlaces = async () => {
  const state = useData.getState();
  if (state.places.length === 0) {
    const places = await getAll("/place");
    state.setPlaces(places);
    console.log("Api");
    console.log(places);
  }
};

const loadPostDiscover = async () => {
  const state = useData.getState();
  if (state.postDiscover.length === 0) {
    const postDiscover = await getAll("/postDiscover");
    state.setPostDiscover(postDiscover);
    console.log("Api");
    console.log(postDiscover);
  }
};

export const loadVerify = async (path: string) => {
  if (path === "/") {
    await loadOptionSearch();
    // Cargar los demás datos en segundo plano
    setTimeout(async () => {
      await Promise.all([loadTags(), loadPlaces(), loadPostDiscover()]);
    }, 0);
  } else if (path === "/places") {
    await loadPlaces();
    // Cargar los demás datos en segundo plano
    setTimeout(async () => {
      await Promise.all([loadOptionSearch(), loadTags(), loadPostDiscover()]);
    }, 0);
  } else if (path === "/discover") {
    await Promise.all([loadTags(), loadPostDiscover()]);
    // Cargar los demás datos en segundo plano
    setTimeout(async () => {
      await Promise.all([loadOptionSearch(), loadPlaces()]);
    }, 0);
  }
};
