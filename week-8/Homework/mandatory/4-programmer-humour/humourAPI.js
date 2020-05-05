const onload = () => {
  getData("https://xkcd.now.sh/?comic=latest");
};

function getData(apiURL) {
  fetch(apiURL)
    .then((respone) => {
      if (respone.ok) {
        return respone.json();
      } else {
        throw new Error(`${respone.text} 404 Page not Found :(`);
      }
    })
    .then((data) => showDog(data));
}

function showDog(data) {
  let imgEL = document.getElementById("dev");

  return (imgEL.src = data.img);
}

document.getElementById("btn").addEventListener("click", () => {
  onload();
});
