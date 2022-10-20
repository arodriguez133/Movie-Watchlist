const container = document.querySelector(".container");

const localStorageMovies = JSON.parse(localStorage.getItem("movies")) || [];

const movieListElements = ({ Poster, Title, Rating, Runtime, Genre, Plot }) => {
  container.innerHTML += `<div class="movie-container">
    <div class="image-container">
      <img src='${Poster}'/>
    </div>
    <div class="movie-content-container">
      <div class="title">
        <h4>${Title}</h4>
        <p>${Rating}</p>
      </div>
      <div class="movie-details">
        <p>${Runtime}</p>
        <p>${Genre}</p>
      </div>
      <div class="movie-desc">
        <p>${Plot}</p>
      </div>
    </div>
    </div>
  `;
};

localStorageMovies.forEach((movie) => {
  console.log(movie);
  movieListElements(movie);
});
