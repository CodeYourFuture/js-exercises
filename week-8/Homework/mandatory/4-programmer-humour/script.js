let image = document.querySelector("#image");
fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    // console.log(response);
    // console.log(response.json);
    return response.json();
  })
  .then((data) => {
    image.src = data.img;
  })
  .catch((error) => {
    console.error(error);
  });
