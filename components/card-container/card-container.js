import { CreateCharacterCard } from "../card/card.js";

export function CardContainer(data) {
  const container = document.createElement("ul");
  container.setAttribute("data-js", "card-container");
  container.classList.add("card-container");
  container.innerHTML = "";
  data.results.forEach((character) => {
    container.append(CreateCharacterCard(character));
  });

  return container;
}
