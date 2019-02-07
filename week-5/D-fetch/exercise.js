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

/*fetch('*** Write the API address here ***')
    .then(function(response) {
        return response.text();
    })
    .then(function(greeting) {
        // Write the code to display the greeting text here
    });*/

//my answer
fetch("https://codeyourfuture.herokuapp.com/api/greetings") //the fetch returns a promise (of response)
  .then(function(response) {
    alert(response.status);
    return response.text(); //this extracts the body from the respnse and returns another promise it will be in text form.
  })
  .then(function(greeting) {
    console.log(greeting); // from the whole response which is in text form now, we are saying just give the greeting specifica

    var greetingBox = document.querySelector("#greeting-text");
    greetingBox.textContent = greeting;
  });

//fetch is a nice way to do an ajax request.fetch returns a promise. textcontent is a eyword that also means innerHTML.
