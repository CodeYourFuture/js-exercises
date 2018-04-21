var myButton = document.querySelector("#bgrChangeBtn");
var myElement = document.querySelector(".jumbotron");
myButton.addEventListener("click", function() {
myElement.style.backgroundColor = "red";
});

var paragraph = document.createElement('p');
paragraph.innerText = "How are you?";
myElement.appendChild(paragraph);

var paragraphs = document.querySelectorAll('p');
for(var i=0; i<paragraphs.length; i++) {
paragraphs[i].style.backgroundColor = "blue";
}

myElement.className = "largeBlock";

var updateTitleBtn = document.querySelector('#addTextBtn');

updateTitleBtn.addEventListener('click', function() {
    var inputBox = document.querySelector('.addArticle');
    var title = inputBox.value;

var titleElement = document.querySelector('.display-3');
   titleElement.innerText = title;
    //inputBox.value = title;
});
