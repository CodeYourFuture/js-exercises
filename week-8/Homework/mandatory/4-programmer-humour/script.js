function load(){
    fetch("https://xkcd.now.sh/?comic=latest")
    .then( data => data.json())
    .then( data => {
        console.log(data)
        const img = document.createElement('img')
        img.src=data.img
        const body = document.querySelector('#body')
        body.appendChild(img)
        
    }) 
    .catch( err => console.log(err))






}





window.onload = load