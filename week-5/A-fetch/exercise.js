/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To know more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

fetch('*** Write here the API address ***')
    .then(function(response) {
        return response.text();
    })
    .then(function(greeting) {
        // Write the code to display the greeting text here
    });