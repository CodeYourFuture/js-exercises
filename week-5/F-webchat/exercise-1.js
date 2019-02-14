/*
Let's build a webchat to communicate with each other!

The requirements of a basic webchat are:
- The user can write a message in an input and send it after clicking on the submit button.
- After clicking on the submit button, the input should be empty.
- The user can read the existing messages in the message list.
- The message list is refreshed automatically every few seconds so 
the user can keep reading the incoming messages without refreshing the page. //fetch inside setInterval .


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
fetch("https://codeyourfuture.herokuapp.com/api/messages")
  .then(function(response) {
    //we are getting the messages from that api and recieving a response to see if the api works.
    console.log(response);
    return response.json();
    //Here we are fetching a JSON file across the network and print it to the console.
  })
  // then we are converting the response to an array of objects using json.
  .then(function(messages) {
    console.log(messages);
    // so this function then gets the message which fufils the promise we made that we would respond.
    var messageBox = document.querySelector("#message-list");

    //this div contains the ul that we created below. which targets the box where our message should go.

    /* for (var i = 0; i < message.length; i++) {
      var node = document.createElement("LI");
      var textnode = document.createTextNode(message[i].datetime);
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
    } */
    messages.map(message => {
      //here we want to grab one msg from all the msg's, by using map to loop the array (in the api)and grab the objects inside of it.
      var node = document.createElement("LI");
      //here i have created a list to pass in the response msg's.
      node.innerHTML = message.content;
      //here i am adding a new message to the list i have created.
      document.getElementById("myList").appendChild(node);
      //getiin the list element and pushing to the list.
    });
    //appendchild feeds the message into ul.
  });

//get data, then select where u want to put it and put the data in that.
