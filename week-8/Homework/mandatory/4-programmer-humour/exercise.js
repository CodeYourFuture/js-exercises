fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => 
    document.querySelector('#image').src = `${data.img}`
    )
  .catch ((error) => console.log(error))