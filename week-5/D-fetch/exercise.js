fetch('https://codeyourfuture.herokuapp.com/api/greetings') //cyf API
    .then(function (response) {
        return response.text();
    })
    .then(function (greeting) {
        document.querySelector("#greeting-text").innerHTML = greeting;
        // Write the code to display the greeting text here
    });