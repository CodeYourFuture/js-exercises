/*

========
Task 2
========

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
function getDateTime(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}
function sendMessage(){
     var messageDate = getDateTime(); // date created when submit is clicked ;
    // getting value of input box from user
    var userMessage = document.getElementById("message-input").value ;
    console.log(messageDate) ;
    var requestBody = { content: userMessage, datetime: messageDate };
    var postRequestParameters = {
    body: JSON.stringify(requestBody),
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    }
    }
    fetch('https://codeyourfuture.herokuapp.com/api/messages',postRequestParameters);
    document.getElementById("message-input").value = "";
    document.getElementById("message-list").innerHTML = "";

    getMessages();
}
//// on click event of submit get the value of input box POST it via fetch 
///// clear the input box and use set interval function to fetch the messages via GET request 
//fetch('https://codeyourfuture.herokuapp.com/api/clipboard', postRequestParameters)



//// on click event of submit get the value of input box POST it via fetch 
///// clear the input box and use set interval function to fetch the messages via GET request 
//fetch('https://codeyourfuture.herokuapp.com/api/clipboard', postRequestParameters)

document.getElementById("submit").addEventListener("click",sendMessage);