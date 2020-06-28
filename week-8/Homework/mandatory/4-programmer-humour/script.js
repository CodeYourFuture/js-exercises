fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())

  .then((data) => {
    let imageTag = document.createElement("img");
    console.log(data);
    imageTag.src = data.img;
    document.body.appendChild(imageTag);
  })

  .catch((error) => console.log(error));
