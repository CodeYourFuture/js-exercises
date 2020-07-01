let ul = document.getElementById("ul");
let li = document.createElement("li");
let img = document.createElement("img");
ul.appendChild(li);
li.append(img);

function fetchJoke () {

    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function(response) {
        return response.json();
    })
    .then(function(programmerJoke) {
        getImage(programmerJoke)
        // console.log(programmerJoke);
    })   
    .catch((error) => console.log(error));
    }

    function getImage (image) {
        img.src = image.img;
    }

  onload = fetchJoke()

