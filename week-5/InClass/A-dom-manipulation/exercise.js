
let p = document.querySelectorAll("p")
console.log(p);

let firstDiv = document.querySelector("div")

console.log(firstDiv);

let jumbotrontext = document.querySelector("#jumbotron-text")

console.log(jumbotrontext);

let pInside = document.querySelector('.primary-content').querySelectorAll("p")

console.log(pInside);

function Alert() {
    alert("Thanks for visiting Bikes for Refugees!")
}


document.querySelector("#alertBtn").addEventListener("click", Alert)

function changeColor() {
    document.querySelector("body").style.backgroundColor = "red"
}

document.querySelector("#bgrChangeBtn").addEventListener("click", changeColor )


function largeLinks(){
    let links = document.querySelectorAll("a");
    for(let i=0; i<links.length; i++) {
        links[i].style.fontSize = "xx-large";        
    }
}

document.querySelector("#largerLinksBtn").addEventListener("click", largeLinks )

