import { Title } from "../title/title.js";
import { Main } from "../main/main.js";
import { NavBar } from "../nav-bar/nav-bar.js";

export function App(data, state) {
  console.log(state);
  const app = document.createElement("app");
  app.classList.add("app");

  app.append(Title(), Main(data, state), NavBar(state));

  return app;
}
