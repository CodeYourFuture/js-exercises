fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (data) {
    if (data.ok) {
      console.log("success");
    } else {
      console.log("unsuccessful");
    }
    return data.json();
  })
  .then(function (newData) {
    const newImage = document.getElementById("image");
    newImage.src = newData.img;
    newImage = newData.alt;
  })
  .catch((error) => {
    console.log(error);
  });
