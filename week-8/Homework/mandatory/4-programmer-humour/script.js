fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (response.ok) {
      console.log(`Success`);
    } else {
      console.log(`Not successful`);
    }
    return response.json();
  })
  .then((data) => {
    const image = document.getElementById("image");
    image.src = data.img;
  })
  .catch((err) => {
    console.log(err);
  });
