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
  for (var i = 0; i < movies.length; i++) {
    var TheP = document.createElement("p");
    var TheContent = document.createTextNode(
      movies[i].title + "-" + movies[i].director
    );
    TheP.appendChild(TheContent);
    const TheMovesDiv = document.getElementById("all-movies");
    TheMovesDiv.appendChild(TheP);
  }
  const Count = document.querySelectorAll("#all-movies p");
  var TheCounter = (document.getElementById("movies-number").innerHTML =
    Count.length - 1);
}

/*

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

*/
const MyFMovies = {
  title: "Harry Poter",
  director: "J. K. Rowling",
  type: "fantasy novels ",
  haveWatched: true,
};
function addMovie() {
  var addIt = document.createElement("p");
  var content = document.createTextNode(
    MyFMovies.title + "-" + MyFMovies.director
  );
  addIt.appendChild(content);

  var TheDiv = document.getElementById("all-movies");
  TheDiv.appendChild(addIt);
  const Count = document.querySelectorAll("#all-movies p");
  var TheCounter = (document.getElementById("movies-number").innerHTML =
    Count.length - 1);
}
setTimeout(showMovies, 1000);

setTimeout(addMovie, 2000);

/*
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

document.getElementById("btn").addEventListener("click", function () {
  var i = movies.length + 1;
  var AddNewP = document.createElement("p");

  movies[i] = {
    title: document.getElementById("title").value,
    director: document.getElementById("director").value,
    type: document.getElementById("type").value,
    haveWatched: document.getElementById("watched").value,
  };

  var TheContentOfP = document.createTextNode(
    movies[i].title + "-" + movies[i].director
  );
  AddNewP.appendChild(TheContentOfP);
  const TheMovesDiv = document.getElementById("all-movies");
  TheMovesDiv.appendChild(AddNewP);

  const Count = document.querySelectorAll("#all-movies p");
  var TheCounter = (document.getElementById("movies-number").innerHTML =
    Count.length - 1);
});
