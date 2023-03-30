export function SeachBar(onSubmit) {
  const container = document.createElement("div");
  container.classList.add("search-bar-container");
  container.setAttribute("data-js", "search-bar-container");

  const form = document.createElement("form");
  form.action = "";
  form.classList.add("search-bar");
  form.setAttribute("data-js", "search-bar");
  form.addEventListener("submit", onSubmit);

  const input = document.createElement("input");
  input.name = "query";
  input.type = "text";
  input.placeholder = "search characters";
  input.classList.add("search-bar__input");
  input.setAttribute("aria-label", "character name");

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");
  button.innerHTML = `
  <img class="search-bar__icon" src="assets/magnifying-glass.png" alt="" />
  `;

  container.append(form);
  form.append(input, button);

  return container;
}
