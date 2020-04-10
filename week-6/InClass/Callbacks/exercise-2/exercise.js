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
*/

/*
Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?




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
/*
Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

*/
function showMovies(){
  let allMoviesEls = document.querySelector("#all-movies");
  allMoviesEls.innerHTML="";
  let pTotal = document.createElement("p");
  pTotal.innerHTML = "Number of movies: ";
  pTotal.className = "alert alert-info";
  allMoviesEls.appendChild(pTotal);
  let spanTotal = document.createElement("span");
  spanTotal.id = "movies-number";
  pTotal.appendChild(spanTotal);
  

  movies.forEach(movie => {
    let pEls = document.createElement("p");
    pEls.innerHTML = `${movie.title}, ${movie.director}`;
    allMoviesEls.appendChild(pEls); 
  })
  let numOfMovies = movies.length;
  document.querySelector("#movies-number").innerHTML = numOfMovies;
}



// create a new movie object for your favorite movie
/*
Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the 
"myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?
*/
// setTimeout(showMovies,1000);
let myMovie ={
  title: "Extention",
  director: "Leigh Whannell",
  type: "horror",
  haveWatched: false,
}
let mySecondMovie ={
  title: "Extention",
  director: "Leigh Whannell",
  type: "horror",
  haveWatched: true,
}

function addMovie(objectMovie, callback){
  movies.push(objectMovie);
  // showMovies();
  callback();
}

setTimeout(()=>addMovie(myMovie, showMovies), 2000);
setTimeout(()=>addMovie(mySecondMovie, showMovies), 4000);


// create addMovies function
/*
Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks
*/

