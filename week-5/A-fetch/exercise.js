/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language
*/

fetch('*** Write here the API address ***')
    .then(function(response) {
        return response.text();
    })
    .then(function(greeting) {
        // Write the code to display the greeting text here
    });