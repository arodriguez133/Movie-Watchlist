import { Movie } from "./src/Movie.js";
import { getMovie } from "./src/api/getData.js";
import { placeHolderHtml } from "./src/utils.js";


const movieContainer = document.querySelector(".movie-container");
const searchPage = document.querySelector(".search-page-container");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".input");

const moviesList = JSON.parse(localStorage.getItem("movies")) || [];

// movieContainer.style.display = "none";
// let movie = placeHolderHtml;
// searchPage.innerHTML = movie;


searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getMovie(searchInput.value).then((res) => {
    searchPage.style.display = "none";
    movieContainer.style.display = "flex";
    let movieInfo = new Movie(res);
    movieContainer.innerHTML = movieInfo.renderMovie();
    let btn = document.querySelector(".add-watchlist-btn");
    btn.addEventListener("click", () => {
      console.log("movie added!");
      movieInfo.addMovie(moviesList);
    });
  });
  searchInput.value = "";
});


