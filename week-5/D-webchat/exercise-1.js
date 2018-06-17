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
var displayMessages= document.querySelector('#message-list');
fetch("https://codeyourfuture.herokuapp.com/api/messages").then(function(response){
    return response.json()
}).then(function(chats){
    //console.log(chats)
    for (var i = 0; i <= chats.length; i++) {
        displayMessages.innerHTML+= "<p>" +chats[i].content + "<p>" }
        //       var listItem = document.createElement('#message-list');
});
// var myList = document.querySelector(' https://codeyourfuture.herokuapp.com/api/messages');

// var myWebchat = new Webchat('products.json');

// fetch(myWebchat)
//   .then(function(response) { return response.json(); })
//   .then(function(message) {
//     for (var i = 0; i < message.products.length; i++) {
//       var listItem = document.createElement('#message-list');
//       listItem.innerHTML = '<strong>' + data.products[i].Name + '</strong> can be found in ' +
//                            data.products[i].Location +
//                            '. Cost: <strong>£' + data.products[i].Price + '</strong>';
//       myList.appendChild(listItem);
//     }
//   });
// Write your code here