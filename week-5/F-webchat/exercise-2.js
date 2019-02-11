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
//call the function when the submit button is clicked on
document.getElementById("submit").addEventListener("click", sendMessage);

//I am creating a function that returns a promise, i ensure that the text area is not empty
// before i proceed onto the actual sending of the text message
function sendMessage() {
    return new Promise((resolve, reject) => {
            if (document.getElementById("message-input").value !== "") {
                resolve();
            } else {
                reject("Error !!! write something");
            }
        }).then(createMessage) //act only if the textarea is not empty
        .catch(err => {
            console.log(err);
            alert("Come on write something"); //pop up if the area is empty
        });
}

function createMessage() {
    var messageBody = {
        content: document.getElementById("message-input").value
    };
    var myMessageInits = { //The options to pass on to fetch
        method: 'POST',
        body: JSON.stringify(messageBody), //convert into string
        headers: {
            'content-type': 'application/json'
        }
    }
    fetch('https://codeyourfuture.herokuapp.com/api/messages', myMessageInits);
    document.getElementById("message-input").value = ""; //emptying the text input arrea
    document.getElementById("message-list").innerHTML = ""; // emptying so i keep the message list at 15 at everytime
    getMessageList();
}