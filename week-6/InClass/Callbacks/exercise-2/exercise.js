/*
================
Exercise 2
----------
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using 
the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

Prefer to work on a codepen? https://codepen.io/makanti/pen/MWwMgmW?editors
================
*/
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
function showMovies(){
  allMovies = document.querySelector("#all-movies");
  allMovies.innerHTML="";
  let movieNum = document.createElement("p");
  movieNum.id = "movies-number";
  movieNum.className = "alert alert-info";
  movieNum.innerText = "Number of movies: "
  allMovies.appendChild(movieNum);
  let totalMovie = document.createElement("span");
  movieNum.appendChild(totalMovie);
  movies.forEach(movie => {
    let pEl = document.createElement("p");
    pEl.innerHTML = `${movie.title} , ${movie.director}`;
    allMovies.appendChild(pEl);
  })
  totalMovie.innerText = movies.length;
}


// create a new movie object for your favorite movie
myMovie = {
  title: "Extension",
  director: "Richard Stanley",
  type: "Action",
  haveWatched: false,
};
setTimeout(showMovies,1000);

setTimeout(()=>{
  movies.push(myMovie);
  showMovies();
}, 2000);
/*
Task 4 - **Extra**
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3
*/
let formEl = document.createElement("form");
document.body.appendChild(formEl);
let titleEl = document.createElement("input");
titleEl.type = "text";
formEl.appendChild(titleEl);
let directorEl = document.createElement("input");
directorEl.type = "text";
formEl.appendChild(directorEl);
let typeEl = document.createElement("input");
typeEl.type = "text";
formEl.appendChild(typeEl);
let haveWatchedEl = document.createElement("input");
haveWatchedEl.type = "text";
formEl.appendChild(haveWatchedEl);
let saveEl = document.createElement("input");
saveEl.type = "button";
formEl.appendChild(saveEl);
saveEl.style.backgroundColor = "lightgrey";
saveEl.value = "Save";
saveEl.addEventListener("click", ()=>{
  let newMovie = {};
  newMovie.title = titleEl.value;
  newMovie.director = directorEl.value;
  newMovie.type = typeEl.value;
  newMovie.haveWatched = haveWatchedEl.value;
  movies.push(newMovie);
  showMovies();
  
})
