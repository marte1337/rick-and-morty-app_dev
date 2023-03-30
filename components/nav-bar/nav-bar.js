import { NavButton } from "../nav-button/nav-button.js";
import { Pagination } from "../nav-pagination/nav-pagination.js";
import { setState } from "../state/state.js";

export function NavBar(state) {
  const handleNextClick = () => {
    if (state.page < state.maxPage) {
      setState({ ...state, page: state.page + 1 });
    }
  };
  const handlePrevClick = () => {
    if (state.page > 1) {
      setState({ ...state, page: state.page - 1 });
    }
  };

  const nav = document.createElement("nav");
  nav.classList.add("navigation");
  nav.setAttribute("data-js", "navigation");

  nav.append(
    NavButton("previous", "prev", handlePrevClick),
    Pagination(state),
    NavButton("next", "next", handleNextClick)
  );

  return nav;
}
