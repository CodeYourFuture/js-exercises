function getFetch() {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(checkFetch)
    .then(response =>
     response.json()
    )
     .then(data => {
        const cardBody = document.querySelector(".card-body")
        const image = document.createElement("img")
        image.className += "card-img-top w-60 m-auto p-auto"
        image.src = data.img
        cardBody.appendChild(image)
    })
    .catch((err) =>
        console.log('Error has occurred: ' + err)
    )
}
getFetch()
function checkFetch(response){
    if(!response.ok){
        throw new Error (
            `Encountered something unexpected : ${response.status} - ${response.url}`
        )
    }
    else{
        return response;
    }
}