import { App } from "./components/app/app.js";
import { state } from "./components/state/state.js";

export function Render(data, state) {
  const root = document.querySelector("#root");
  root.innerHTML = "";
  root.append(App(data, state));
}

export async function fetchCharacters(state) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${state.page}&name=${state.searchQuery}`
    );

    if (response.ok) {
      const data = await response.json();
      state.maxPage = data.info.pages;
      Render(data, state);
    } else {
      console.error("Bad request!");
    }
  } catch (error) {
    console.error("Ich habe ein Problem beim lesen von dem link");
  }
}

fetchCharacters(state);
