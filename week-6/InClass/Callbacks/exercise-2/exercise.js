const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
function showMovies(movies) {
  let targetAllMovies = document.querySelector("#all-movies");
  let targetMoviesNumber = document.querySelector("#movies-number");
  targetMoviesNumber.innerHTML = `${Object.keys(movies).length}`;

  setTimeout(function () {
    movies.forEach((movie) => {
      targetAllMovies.innerHTML += `<p>${movie["title"]}</p>`;
      targetAllMovies.innerHTML += `<p>${movie["director"]}</p>`;
    });
  }, 1000);
}
showMovies(movies);

// create a new movie object for your favorite movie
var myFavourite = [
  {
    title: "Rashomon",
    director: "Akira Kurosawa",
    type: "crime",
    haveWatched: true,
  },
];

// create addMovies function
function addMovies(myFavourite) {
  setTimeout(function () {
    let targetMoviesNumber = document.querySelector("#movies-number");
    targetMoviesNumber.innerHTML = myFavourite.length + movies.length;
    myFavourite.forEach((x) => {
      movies.push(x);
      let targetAllMovies = document.querySelector("#all-movies");
      targetAllMovies.innerHTML += `<p>${x["title"]}</p>`;
      targetAllMovies.innerHTML += `<p>${x["director"]}</p>`;
    });
  }, 2000);
}
addMovies(myFavourite);
