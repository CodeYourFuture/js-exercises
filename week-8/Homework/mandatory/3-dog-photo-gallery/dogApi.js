function getData(apiURL) {
  fetch(apiURL)
    .then((respone) => {
      if (respone.ok) {
        return respone.json();
      } else {
        throw new Error(`404 Page not Found :(`);
      }
    })
    .then((data) => showDog(data));
}

function showDog(data) {
  let imgEL = document.getElementById("dev");
  return (imgEL.src = data.message);
}

document.getElementById("btn").addEventListener("click", () => {
  getData("https://dog.ceo/api/breeds/image/random");
});
