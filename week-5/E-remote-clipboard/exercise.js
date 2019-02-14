/*
Task 1
=======
Use fetch to create a new clipboard.

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/clipboard
Request Body: { "title": "myClipboardId", "text": "some text to put in the clipboard"}

*/

// Task 1: create a new clipboard
// Complete the code below

//post is a type of request.

var clipboardTitle = "myClipboardId";
var clipboardText = "some text to put in the clipboard";
var requestBody = {
  title: clipboardTitle, //this is the new clipboad that we want to get back(body).
  text: clipboardText
};
//the things we have changed in 'change me' is what will be posted to that api.

var postRequestParameters = {
  body: JSON.stringify(requestBody),
  method: "POST",
  headers: {
    "content-type": "application/json"
  }
};

fetch(
  "https://codeyourfuture.herokuapp.com/api/clipboard",
  postRequestParameters
);

//get= empty envelope that sends us something back. post = we send something inside the envelope which tells them how to respond.

// Task 2: Load an existing clipboard
// Add your code below

/* 
Task 2
    ======
    Use fetch to load the text of an existing clipboard and display it in the browser console.

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId
Also, for GET request, you can use the url directly in your browser address bar
    */

fetch("https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId")
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    console.log(body);
  });
