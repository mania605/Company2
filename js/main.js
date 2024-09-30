import Anime from "./anime.js";

const h1 = document.querySelector("header h1");

h1.addEventListener("click", e => {
  e.preventDefault();
  new Anime(window, { scroll: 700 }, { duration: 1000 });
});