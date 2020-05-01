let createImage = document.createElement('img');
createImage.id = 'image';
document.body.appendChild(createImage);

let theImage;
fetch('https://xkcd.now.sh/?comic=latest')
    .then(response => response.json())
    .then(Data => {
        theImage = Data.img;
        console.log(Data);
        document.getElementById('image').src = theImage;
    }).catch(error => console.log(error));

