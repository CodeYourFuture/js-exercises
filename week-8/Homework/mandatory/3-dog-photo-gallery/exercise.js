let getBtn = document.getElementById("random-image");
function getData() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let printImg = data.message;
      myImages(printImg);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
let createUl = document.createElement("ul");
createUl.className += "ul-size";
function myImages(image) {
  let content = document.getElementById("add-photos");
  let createImg = document.createElement("img");
  createImg.className += "image-size";
  let createList = document.createElement("li");
  createList.className += "img-list";
  createImg.src = image;
  createList.appendChild(createImg);
  createUl.appendChild(createList);
  content.appendChild(createUl);
}

getBtn.addEventListener("click", getData);
