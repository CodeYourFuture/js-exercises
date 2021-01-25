fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (result) {
    return result.json();
  })

  .then(function (humor) {
    console.log(humor);
    document.querySelector("#image").src = humor.img;
  })
  .catch((error) => console.log(error));
