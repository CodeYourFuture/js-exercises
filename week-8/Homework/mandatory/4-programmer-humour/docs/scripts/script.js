fetch(`https://imgs.xkcd.com/comics/everyones_an_epidemiologist.png`)
.then(function(result){
    return result.json();
})
.then(function(pic){
    console.log(pic);
    let body = document.querySelector("body");
    let img = document. creasteElement("img");
    body.appendChild(img);
    img.src = pic.img;
});