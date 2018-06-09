/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page.


========
Task 1
========

Your task is to build the webchat frontend. 
Some code is already written in index.html, that you can open in your browser.
For the purpose of this exercise, you are provided a server which you can interact 
with to get and save messages. Some messages already exist on the server. 

Your first task is to display those messages in the page, 
in the HTML element with the id "message-list". Use the following API to get the messages:

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/messages


===============
Expected result
===============

When you open index.html in your browser, it should display the existing messages on the page.

*/

// Write your code here
// var requestURL = "https://codeyourfuture.herokuapp.com/api/messages";

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     fetch("https://codeyourfuture.herokuapp.com/api/messages")
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(chats) {
//         console.log(chats);
//         var displayMessages = document.querySelector("#message-list");
//         for (var i = 0; i < chats.length; i++) {
//           displayMessages.innerHTML += "<p>" + chats[i].content + "</p>";
//         }
//       });
//   }
// };
// xhttp.open("GET", requestURL);
// xhttp.send();

// var request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();
// request.onload = function() {
//   var chatContent = request.response;
//   populateHeader(chatContent);
//   showHeroes(chatContent);
// };
// fetch("https://codeyourfuture.herokuapp.com/api/messages")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(chats) {
//     console.log(chats);
//     var displayMessages = document.querySelector("#message-list");
//     for (var i = 0; i < chats.length; i++) {
//       displayMessages.innerHTML += "<p>" + chats[i].content + "</p>";
//     }
//   });
