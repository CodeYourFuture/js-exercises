const image = document.querySelector('img')

fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        image.src = data.img
    })
    .catch(error => {
        console.log(error)
    })
