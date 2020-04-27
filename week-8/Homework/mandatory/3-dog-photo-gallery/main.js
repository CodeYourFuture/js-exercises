let newTile = function(){
fetch(`https://dog.ceo/api/breeds/image/random`)
.then(function(result){
    return result.json();
})
.then(function(pic){
    console.log(pic)
    let ul=document.querySelector("ul");
    let newLi = document.createElement("li");
    ul.appendChild(newLi);
    
    let onePic = document.createElement("img");
    newLi.appendChild(onePic);
    onePic.src = (pic.message);
});
};
let btn = document.querySelector("button");
    btn.addEventListener("click", newTile);




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