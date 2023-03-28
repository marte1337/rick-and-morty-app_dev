export function NavButton(text, stamp, onClick) {
  const button = document.createElement("button");
  button.classList.add("button", `button--${stamp}`);
  button.setAttribute("data-js", `button-${stamp}`);
  button.textContent = text;
  button.addEventListener("click", onClick);

  return button;
}
