// Setup my page for onload
window.onload = setup;
// Setup function for create elements and fetch data
function setup() {
  let body_El = document.querySelector("body");
  let image_El = document.createElement("img");

  body_El.id = "body_JS";
  body_El.className = "body_CSS";
  image_El.id = "image_JS";
  image_El.className = "image_CSS";

  // Fetch data from API Server
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => {
      // if fetch it was success return jason file(objects)
      return response.json();
    })
    .then((data) => {
      // Then If data recived show image
      console.log(data);
      image_El.src = data.img;
      body_El.appendChild(image_El);
    })
    // If promise has any error show error in console
    .catch((error)=>{
      console.log(error);
    });
}
