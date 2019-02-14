/*

========
Task 2
========
input msgs and send em. 
Your second task is to send a new message to the server.

After writing a message in the input and clicking on the submit button,
send the message to store it on the remote server. Use the following API:

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/messages
Request Body: { "content": "some text" }


===============
Expected result
===============

After opening index.html in your browser, write a message in the input field and click
on the submit button. Then check the following:

1) The input field should be empty.
2) When you refresh the page in your browser, you should be able to see your new message in the message list.
*/

// Write your code here

var subBtn = document
  .getElementById("submit")
  .addEventListener("click", submitText);
//here i am slecting the submit btton and listening for clicks which will then execute my function.

function submitText() {
  var getMsg = document.getElementById("message-input").value;
  //this is a function that will select the value i have put in the input field. var are also storage.
  var msg = { content: getMsg };

  //this is the content we now want to push.object with the content we want to send.
  var postRequestParameters = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    //we are telling the api that this is a post of type json.
    body: JSON.stringify(msg)
    // convert to json by calling the variable msg, which also contains the var getMsg.
  };
  console.log(postRequestParameters);
  fetch(
    "https://codeyourfuture.herokuapp.com/api/messages",
    postRequestParameters
  );
  //push to the api.

  document.getElementById("message-input").value = "";
  //we dont need to remmeber whats in here as we are discarding it.
}
view();

function view() {
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
      var messageBox = document.getElementById("myList");

      //this div contains the ul that we created below. which targets the box where our message should go.

      /* for (var i = 0; i < message.length; i++) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(message[i].datetime);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
      } */

      //line 88, clears the messages (li) everytime the function view loops.

      messageBox.innerHTML = "";
      //here i am adding to my var on line 75, and everytime it goes through .map it will be populated so will then clear the message.
      // we are clearly this because it reduces load time, not only does it load new msg's it has to continue to show what its already loaded and only loads our msg.

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
}
