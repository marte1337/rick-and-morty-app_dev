export function Title() {
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Rick and More";

  return title;
}
