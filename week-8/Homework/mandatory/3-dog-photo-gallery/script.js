// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
function getData(imageURL) {
  fetch(imageURL)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json()
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`,
        )
      }
    })
    .then((data) => addImage(data))
    .catch((error) => console.error(error))
}

function addImage(imageData) {
  let li = document.createElement('li')
  document.querySelector('#uList').appendChild(li)
  let img = document.createElement('img')
  li.appendChild(img)
  img.src = imageData.message
}

function setup() {
  getData('https://dog.ceo/api/breeds/image/random')
}

document.querySelector('#load').addEventListener('click', setup)
