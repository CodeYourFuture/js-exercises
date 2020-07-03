document.getElementById("button").addEventListener("click", () => {
  let makeImage = document.getElementById("dogImages");

  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function (data) {
      return data.json();
    })
    .then(function (newLink) {
      makeImage.src = newLink.message;
    })
    .catch((error) => {
      console.log(error);
    });
});
