/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

fetch("https://codeyourfuture.herokuapp.com/api/greetings")
  .then(function(response) {
    return response.text();
  })
  .then(function(greeting) {
    console.log(greeting); // Write the code to display the greeting text here
  });

var container = document.querySelector("#greeting-text");
container.addEventListener("click", function() {
  fetch("https://codeyourfuture.herokuapp.com/api/greetings")
    .then(function(response) {
      return response.text();
    })
    .then(function(greeting) {
      var box = document.querySelector("#greeting-text");
      var newText = document.createElement("p");
      newText.innerText = greeting;
      box.appendChild(newText);
      newText.style.color = "Green";
      console.log(greeting);
    });
});
