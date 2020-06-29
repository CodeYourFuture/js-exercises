let jokeImage = document.getElementById("joke");
let jokeTitle = document.getElementById("title");

function getData(data) {
  fetch(data)
    .then((response) => {
      return response.json();
    })
    .then((joke) => {
      console.log(joke);
      jokeTitle.innerText = joke.title;
      jokeImage.src = joke.img;
      jokeImage.alt = joke.alt;
    })
    .catch((error) => console.log(error));
}
getData("https://xkcd.now.sh/?comic=latest");
