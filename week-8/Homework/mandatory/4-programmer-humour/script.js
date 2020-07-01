const api_url = "https://xkcd.now.sh/?comic=latest";

let jokeImage = document.getElementById("joke");
let jokeTitle = document.getElementById("jokeTitle");

function getJoke() {
  fetch(api_url)
    .then((response) => response.json())
    .then((joke) => {
      console.log(joke);
      jokeTitle.innerText = joke.title;
      jokeImage.src = joke.img;
      jokeImage.alt = joke.alt;
    })
    .catch((error) => {
      console.log("error!!!");
      console.error(error);
    });
}
getJoke();
