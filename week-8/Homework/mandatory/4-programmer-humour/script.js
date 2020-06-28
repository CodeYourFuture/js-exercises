fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })

  .then((response) => {
    let imageTag = document.createElement("img");
    console.log(response);
    imageTag.src = response.img;
    document.body.appendChild(imageTag);
  })

  .catch((error) => console.log(error));
