fetch(`https://xkcd.now.sh/?comic=latest`)
  .then((response) => response.json())
  .then((response) => {
    document.getElementById("image").src = response.img;
  });
  .catch ((error) => console.log(error));
// .catch((error)=> alert (error));

