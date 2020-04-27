let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let myInput = document.querySelector("#numberInput");
myInput.addEventListener("input",getFactFetch);
function getFactFetch(){
    let number = myInput.value;
    fetch("http://numbersapi.com/"+number)
        .then(response => response.text ())
        .then(data =>{
            if(number != ''){
                fact.style.display = "block";
                factText.innerText = data;
            }    
        })
        .catch(err => console.log(err)); 
}