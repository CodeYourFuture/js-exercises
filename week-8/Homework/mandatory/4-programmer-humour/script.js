const fetchData = () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.img);
      let img = document.createElement("img");
      img.src = data.img;
      document.getElementById("container").appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = fetchData();
