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
var output = document.getElementById("message-list");


function getMessageList() {

    fetch("https://codeyourfuture.herokuapp.com/api/messages")
        .then((res) => res.text()) ///res.json()  gave me a massive array of object type 
        .then((data) => {
            // JSON.parse(data).length = 20 447              
            // JSON.stringify(data).length = 1 265 332      the whole array was made of strings
            var dataParse = JSON.parse(data);
            ////i am going to print only the 15 last messages of the chat at everytime so i am using a for 

            // console.log(dataParse);
            for (var i = dataParse.length - 15; i < dataParse.length; i++) {
                output.innerHTML += "<li>" + "<b>" + dataParse[i].datetime + "</b>" + " - " + dataParse[i].content + "</li>";
            };

        })
        .catch((error) => console.log(error));
}
setInterval(getMessageList(), 2000);