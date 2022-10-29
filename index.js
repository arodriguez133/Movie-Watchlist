import { Movie } from "./src/Movie.js";
import { getMovie } from "./src/api/getData.js";
import { placeHolderHtml } from "./src/utils.js";
import { gsap } from "gsap";



const tl = gsap.timeline();


const movieContainer = document.querySelector(".movie-container");
const searchPage = document.querySelector(".search-page-container");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".input");

const moviesList = JSON.parse(localStorage.getItem("movies")) || [];

movieContainer.style.display = "none";
let movie = placeHolderHtml;
searchPage.innerHTML = movie;


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
      const buttons = gsap.utils.toArray(".add-watchlist-btn");
      const addedDiv = gsap.utils.toArray(".added");
      console.clear();
      console.log(movieContainer);
      buttons.forEach((btn, index) => {
        tl.to(addedDiv[index], { autoAlpha: 1, duration: 0 })
          .to(addedDiv[index], { autoAlpha: 0, duration: .5 }, "+=.5")
          .to(movieContainer, { autoAlpha: 0 }, "<");
      });
    });
  });
  searchInput.value = "";
});


