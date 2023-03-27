export function NavButton () {
  const button = document.createElement('button');
  button.classList.add('button', 'button--prev');
  button.setAttribute('data-js', 'button-prev');
  button.textContent = 'previous';

  return button;
}