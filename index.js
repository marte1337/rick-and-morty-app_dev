import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";


async function fetchCharacters() {
  try{
    cardContainer.innerHTML = "";
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);

    if(response.ok){
      const data = await response.json();
      maxPage = data.info.pages
      pagination.innerHTML = `${page} / ${maxPage}`
    
      data.results.forEach((character) => {
        cardContainer.append(createCharacterCard(character));
      })
    } else {
      console.error('Bad request!')
      pagination.innerHTML = ` 0 / 0`;
    }
    
    } catch(error) {
    console.error(error.message);
    pagination.innerHTML = ` 0 / 0`;
  }
}
  


fetchCharacters();


nextButton.addEventListener("click", () => {
if(page < maxPage)
  page++;

  fetchCharacters()
})

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;

    fetchCharacters()
  } 
})

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  
  searchQuery = event.target.elements[0].value;
  fetchCharacters();
});