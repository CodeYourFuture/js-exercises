console.log("Hello");

const fetchPhoto = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let img = (document.getElementById("img").src = data.message);
    })
    .catch((error) => {
      console.log(error);
    });
};
let button = document.getElementById("button");
console.log(button);

button.addEventListener("click", fetchPhoto);

window.onload = fetchPhoto(); /// calls the function as soon as it loads
