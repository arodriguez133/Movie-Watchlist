export class Movie {
  constructor(data) {
    Object.assign(this, data);
  }

  renderMovie() {
    return ` 
    <div class="image-container">
           <img src='${this.Poster}'/>
    </div>
    <div class="movie-content-container">
      <div class="title">
        <h4>${this.Title}</h4>
        <p>${this.imdbRating}</p>
      </div>
      <div class="movie-details">
        <p>${this.Runtime}</p>
        <p>${this.Genre}</p>
        <button class="add-watchlist-btn"><i class="fa-solid fa-circle-plus"></i> Watchlist</button>
      </div>
      <div class="movie-desc">
        <p>${this.Plot}</p>
      </div>
      <div class="added">
      <h4>Added!</h4>
      </div>
    </div>
  `;
  }

  addMovie(movieList) {
    movieList.push({
      Title: this.Title,
      Runtime: this.Runtime,
      Genre: this.Genre,
      Plot: this.Plot,
      Poster: this.Poster,
      Rating: this.imdbRating
    });

    localStorage.setItem("movies", JSON.stringify(movieList));
  }
}
