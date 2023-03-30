import { CardContainer } from "../card-container/card-container.js";
import { SeachBar } from "../search-bar/search-bar.js";
import { setState } from "../state/state.js";

export function Main(data, state) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, searchQuery: event.target.elements[0].value });
  };

  const main = document.createElement("main");

  main.append(SeachBar(handleSubmit), CardContainer(data));

  return main;
}
