fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data);

    var theimg = document.createElement("img");
    var thediv = document.getElementById("div");
    theimg.src = data.img;
    thediv.appendChild(theimg);
  })
  .catch((error) => {
    console.log(error);
  });
