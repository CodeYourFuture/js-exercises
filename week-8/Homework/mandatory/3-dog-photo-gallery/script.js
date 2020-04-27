// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData (imageURL) {
  fetch (imageURL)
    .then (response => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json ();
      } else {
        throw new Error (
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then (data => addImage (data))
    .catch (error => console.log (error));
}

function addImage (imageData) {
  document.querySelector ('#image').src = imageData.message;
}

function setup () {
  getData ('https://dog.ceo/api/breeds/image/random');
}

document.querySelector ('#load').addEventListener ('click', setup);
