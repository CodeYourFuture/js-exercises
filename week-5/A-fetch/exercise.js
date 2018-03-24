/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

var btn = document.querySelector("#btn");
var clear = document.querySelector("#clear");
var greetText = document.querySelector("#greeting-text");

var count = 0;

btn.addEventListener("click", function() {
	fetch("https://codeyourfuture.herokuapp.com/api/greetings")
		.then(function(response) {
			return response.text();
		})
		.then(function(greeting) {
            // Write the code to display the greeting text here
            var box = document.querySelector("#greeting-text");
			var paragraph = document.createElement("p");
            paragraph.innerText = greeting;
            count++;
            if(count % 2 === 0){
                paragraph.style.color = "blue";
            } else {
                paragraph.style.color = "red";
            }
            
			box.appendChild(paragraph); 
		});
});

clear.addEventListener("click", function(){
    greetText.innerText = "";
});