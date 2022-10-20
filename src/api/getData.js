export function getMovie(movieTitle) {
  return fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=3861f60e`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
