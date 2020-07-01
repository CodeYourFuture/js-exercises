function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then((images) => {
      var ImageEl = document.getElementById("img");
      ImageEl.src = images.message;
    })
    .catch((err) => {
      console.log(err);
    });
}
document.getElementById("button").addEventListener("click", fetchDog);
