const image = document.getElementById("the-image");
console.dir(image);
//console.dir(theDayProp)

function fetchData(){
    fetch("https://xkcd.com/info.0.json")
    .then(response => response.json())
    .then(data => {

        console.log(data);
        const url = data.img;
        //a little practice accessing different keys in the "data" object 
        const theDayProp = data.day;
        const theNumProp = data.num;
        const theYearProp = data.year;
        console.log(url);
        console.log(theDayProp);
        console.log(theNumProp);
        console.log(theYearProp);
        image.src = url;
        image.alt = "my name is Ysuf";
        image.width = auto;
        image.title = "here is a new title";
    })
    .catch((err) => Console.log(err))
};
fetchData();

