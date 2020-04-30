
let image = document.getElementById("image");
let button = document.getElementById('button');
let content = document.getElementById("content");
button.addEventListener("click" ,getData);
function getData(dog) {
    fetch("https://dog.ceo/api/breeds/image/random")
.then(function (response) {
  return response.json();
})
.then((dog) => {
    setDog(dog);
  console.log("dog :" + dog.message);
})
.catch((error) => console.log(error));
}
function setDog(dog){
    console.log("ghghgh:"+image.src);
    image.src = dog.message;
}

