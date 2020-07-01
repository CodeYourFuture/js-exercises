console.log("Hi");
function getData(url) {
  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      let getData = data.img;
      displayImg(getData);
      console.log(getData);
    })
    .catch((error) => {
      console.log(error);
    });
}
getData("https://xkcd.now.sh/?comic=latest");
let content = document.getElementById("container");
function displayImg(image) {
  let createImg = document.createElement("img");
  createImg.src = image;
  content.appendChild(createImg);
}
