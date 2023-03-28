import { fetchCharacters } from "../../index.js";

export let state = {
  maxPage: "",
  page: 1,
  searchQuery: "",
};

export function setState(newState) {
  if (newState !== undefined) {
    state = newState;
  }

  fetchCharacters(state);
}
