function setup () {
  fetch ('https://xkcd.now.sh/?comic=latest')
    .then (response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json ();
      } else {
        throw new Error (
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then (data => render (data));
}
function render (data) {
  console.log (data);
  let imgElement = document.createElement ('img');
  imgElement.src = data.img;
  document.querySelector ('#content').appendChild (imgElement);
}

window.onload = setup;
