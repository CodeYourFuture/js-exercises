const dogList = document.getElementById("dogList");
const api_url = "https://dog.ceo/api/breeds/image/random";

const button = document.getElementById("getImage");
button.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch(api_url)
    .then((response) => response.json())
    .then((dog) => {
      console.log(dog);
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.classList.add("dogImages");
      img.src = dog.message;
      li.appendChild(img);
      dogList.appendChild(li);
    })
    .catch((error) => {
      console.log("error!!!");
      console.error(error);
    });
}
