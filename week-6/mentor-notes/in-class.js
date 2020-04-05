// Exercise 1

const body = document.querySelector('body');
const colors = ['green', 'blue', 'yellow', 'red'];
setTimeout(function () {
  body.style.backgroundColor = "yellow";
  body.style.color = "orange";
}, 1000)

const myInterval = setInterval(function () {
  let randomColorIndex = Math.floor(Math.random() * 4);
  body.style.backgroundColor = colors[randomColorIndex]
}, 1000)


// Exercise 2
// ----------
// You are given the following list of books
// const movies = [
//     {
//         title: "Color Out of Space",
//         director: "Richard Stanley",
//         type: "sci-fi",
//         haveSeen: false
//     },
//     {
//         title: "The Whistlers",
//         director: "Corneliu Porumboiu",
//         type: "comedy",
//         haveSeen: true
//     },
//     {
//         title: "A Twelve-Year Night",
//         director: "Álvaro Brechner",
//         type: "crime",
//         haveSeen: true
//     },
//     {
//         title: "The Invisible Man",
//         director: "Leigh Whannell",
//         type: "horror",
//         haveSeen: false
//     },
// ];

// Task 1
// Create a function that receives an array of movies as an argument
// - it iterates through the array of movies and
// - for each movie, creates a <p> element with the movie title and director and append it to the #all-movies div.

// Task 2
// Amend your function above, to receive a callback function as the second argument.
// The callback fuction should only console log "Movies added on the page" after all the movies have been added to the page

// Task 3
// Create a function that receives the array of movies as an argument
// - it iterates through the array of movies
// - for the movies of type "horror" it creates a <p> element with the movie title and director and append it to the #horror-movies div.
//  Pass a callback as a second argument to your function
// - the callback should recieve the movies list as an argument and should 
// append the total number of horror movies on the span with id="horror-movies-number"

// Task 4 - **Extra**
// Create a form with 4 input text fields, one for each property of your movie object
// Create a submit button.
// When the button is clicked
// - The field values should be used to create a new movie object literal
// - The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1-3

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

function showMovies() {
  setTimeout(function () {
    const main = document.querySelector("#all-movies");
    movies.forEach(movie => {
      const newP = document.createElement("p");
      newP.innerText = movie.title;
      main.append(newP);
    });
    document.querySelector("#movies-number").innerText = movies.length;
  }, 1000);
}

function addMovie(movie, callback) {
  setTimeout(function () {
    movies.push(movie);
    callback();
  }, 2000);
}

const myFavMovie = {
  title: "Big fish",
  director: "Tim burton",
  type: "adventure",
  haveWatched: true,
}

addMovie(myFavMovie, showMovies);