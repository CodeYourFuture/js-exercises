/*
================
Exercise 2
----------
================
*/
const movies = [
  {
    title: "Color Out of Space",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    haveWatched: false,
  },
];

function createDomMovie(movie) {
  const movieInfo = document.createElement("p");
  movieInfo.innerText = `Title: ${movie.title}. Seen: ${movie.haveWatched}`;
  const allMovies = document.querySelector("#all-movies");
  allMovies.appendChild(movieInfo);
}

function reloadMovieList() {
  const allMovies = document.querySelector("#all-movies");
  allMovies.innerHTML = "";
  movies.forEach(createDomMovie);
}

reloadMovieList();

function addMovie() {
  const loadingText = document.querySelector("#loading-text");
  const movieTitleInput = document.querySelector("#new-movie-input");
  const movieTitle = movieTitleInput.value;

  // Your task - write the code in this function:
  // 1. The moment this function is called:
  //      - clear the input so it's empty
  //      - show the loading text (Hint: look inside index.html for some CSS classes you can use to show and hide this element)
  // 2. after 4 seconds:
  //  - create a new movie object and add it to the "movies" array (make sure its "haveWatched" value is false)
  //  - hide the "loading text"
  //  - make sure the new movie shows up in the movie list
}

const addMovieButton = document.querySelector("#add-movie-btn");
addMovieButton.addEventListener("click", addMovie);
