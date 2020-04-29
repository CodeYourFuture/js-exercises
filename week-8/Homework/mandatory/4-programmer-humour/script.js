fetch(`https://xkcd.now.sh/?comic=latest`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayReceivedData(data)
        })
        .catch(error => console.log(error));

function displayReceivedData (data){
    console.log(data.img)
    let newImgEl = document.createElement("img")
    newImgEl.src = data.img;
    document.body.appendChild(newImgEl)
}

window.onload