console.log(document.querySelector("body"));

async function getComix() {
  const response = await fetch("https://xkcd.now.sh/?comic=latest");
  const data = await response.json();
  console.log(data);
  let divContainer = document.getElementById("imageContainer");
  let imgItem = document.getElementById("comicImage");
  imgItem.src = data.img;
}

window.onload = getComix().catch((error) => {
  console.log(error);
  let imgItem = document.getElementById("comicImage");
  imgItem.src =
    "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg";
});
