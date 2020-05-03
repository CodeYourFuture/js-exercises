let root = document.getElementById("root");

function getFetchData() {
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let img = document.createElement("img");
      root.appendChild(img);
      img.src = data.img;
    })
    .catch((error) => console.log(error));
}
getFetchData();
