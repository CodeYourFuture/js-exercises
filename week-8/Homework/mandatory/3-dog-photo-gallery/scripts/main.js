fetch(`https://dog.ceo/api/breeds/image/random`)
.then(function(result){return result.json()}
.then(function(Pic){
    let body=document.querySelector(body);
    let onePic = document.createElement("img");
    onePic.src = (Pic);
}));




// fetch('https://codeyourfuture.herokuapp.com/api/greetings')
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(greeting) {
//         // Write the code to display the greeting text here
//         let hi = document.createElement("h1");
//         let body = document.querySelector("body");
//         body.appendChild(hi);
//         hi.setAttribute("id", "greeting-text");
//         hi.textContent = (greeting);

//     });