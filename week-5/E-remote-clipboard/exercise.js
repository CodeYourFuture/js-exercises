// Task 1: create a new clipboard
// Complete the code below

var clipboardTitle = "CHANGE ME";
var clipboardText = "CHANGE ME";
var requestBody = {
    title: clipboardTitle,
    text: clipboardText
};

var postRequestParameters = {
    body: JSON.stringify(requestBody),
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    }
};

fetch("https://codeyourfuture.herokuapp.com/api/clipboard", postRequestParameters);


// Task 2: Load an existing clipboard
// Add your code below

fetch("https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId").then(function (response) {
    return response.text();
}).then((greet) => {
    document.querySelector("#greeting-text").innerHTML = greet;
});