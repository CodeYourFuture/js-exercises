
let button = document.getElementById("button");
let ul = document.getElementById("ul");
let li = document.createElement("li");
let img = document.createElement("img");
ul.appendChild(li);
li.append(img);

button.addEventListener("click", getFetch);

function getFetch() {
    
fetch("https://dog.ceo/api/breeds/image/random")
.then(function(response) {
    return response.json();
})
.then(function(dogImage) {
    getImage(dogImage)
    // console.log(dogImage.message);
})   
.catch((error) => console.log(error));
}

function getImage (dog) {
    img.src = dog.message;
}



