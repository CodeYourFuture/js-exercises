
let title1 = document.getElementById("title1");
let image1 = document.getElementById("image1");
let year1 = document.getElementById("year1");
let date1 = document.getElementById("date1");
let alert1 = document.getElementById("alert1");

let title2 = document.getElementById("title2");
let image2 = document.getElementById("image2");
let year2 = document.getElementById("year2");
let date2 = document.getElementById("date2");
let alert2 = document.getElementById("alert2");

let button = document.getElementById('button');

button.addEventListener("click" ,getDataForTwo);

function getData1(comic) {
    fetch(`https://xkcd.now.sh/?comic=latest`)
.then(function (response) {
  return response.json();
})
.then((comic) => {
    setComic1(comic);
  //console.log("dog :" + comic.message);
})
.catch((error) => console.log(error));
}
function getDataForTwo(){
    getData1();
    getData2();
}
function setComic1(comic){
    title1.textContent = comic.title;
    image1.src = comic.img;
    year1.textContent = comic.year;
    date1.textContent = comic.day;
    alert1.textContent = comic.alt;
}

function getData2(comic) {
    fetch(`https://xkcd.now.sh/?comic=latest`)
.then(function (response) {
  return response.json();
})
.then((comic) => {
    setComic2(comic);
  //console.log("dog :" + comic.message);
})
.catch((error) => console.log(error));
}
function setComic2(comic){
    title2.textContent = comic.title;
    image2.src = comic.img;
    year2.textContent = comic.year;
    date1.textContent = comic.day;
    alert2.textContent = comic.alt;
}