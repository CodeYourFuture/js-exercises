// As a revision for week-4 DOM material
// Students are asked to clone this: https://codepen.io/BexB1/pen/XWbLKGq and work on the following tasks:

// Task 1

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

var images = document.querySelectorAll("img");

function centerImages() {
  images.forEach((element) => {
    element.classList.add("content-title");
  })
}

centerImages(images)


// Task 2

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

var sections = document.querySelectorAll("section")

function updateSections() {
  sections.forEach((element) => {
    element.style.backgroundColor = "white"
  })
}

updateSections();

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.


// Exercise 1
// ----------

const body = document.querySelector('body');

setTimeout(function () {
  body.style.backgroundColor = "yellow";
  body.style.color = "orange";
}, 1000)

let colors = ['green', 'blue', 'yellow', 'red'];
let randomColorIndex = Math.floor(Math.random() * 4); // get a random index between 0-3
const myInterval = setInterval(function () {
  body.style.backgroundColor = colors[randomColorIndex]
}, 1000)


// Exercise 2
// ----------

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
