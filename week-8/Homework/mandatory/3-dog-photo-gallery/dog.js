function getData(URL) {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      dataBase(json);
    })
    .catch((err) => console.log(err));
}

function dataBase(message) {
  addPicButton(message);
}

let ulList = document.getElementById(`ul`);
function dogyPic(message) {
  let liList = document.createElement(`li`);
  let img = document.createElement(`img`);
  ulList.appendChild(liList);
  liList.appendChild(img);
  img.src = message;
}

function addPicButton(newPic) {
  let button = document.getElementById(`button`);
  button.innerText = `click here to add random pictures`;
  button.addEventListener(`click`, () => {
    dogyPic(newPic.message);
  });
}

function onLoad() {
  getData(`https://dog.ceo/api/breeds/image/random`);
}

window.onload = onLoad;
