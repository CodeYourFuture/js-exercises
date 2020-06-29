let happyButton = document.getElementById("getADog");
let dogList = document.getElementById("dogList");

happyButton.addEventListener("click", () => {
  getData("https://dog.ceo/api/breeds/image/random");
});
function getData(data) {
  fetch(data)
    .then((response) => {
      return response.json();
    })
    .then((dog) => {
      dogList.append(makeListItem(dog));
    })
    .catch((error) => console.log(error));
}
function makeDogImage(dog) {
  let dogImage = document.createElement("img");
  dogImage.src = dog.message;
  return dogImage;
}

function makeListItem(dog) {
  let listItem = document.createElement("li");
  listItem.append(makeDogImage(dog));
  return listItem;
}
