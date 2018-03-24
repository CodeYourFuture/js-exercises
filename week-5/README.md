# AJAX

## Client/Server architecture

A **server** is a device or program that provides functionality to other programs or devices. There are database servers, mail servers, game servers, etc. The vast majority of these servers are accessed over the internet. They can take the form of industrial server farms that provide a service to millions of users (used by Facebook, Google, etc.), to personal servers for storing your files.

The server communicates with **clients**. A client can be a web browser, a Slack app, your phone, etc.

Client–server systems use the **request–response** model: a client sends a request to the server, which performs some action and sends a response back to the client, typically with a result or acknowledgement.

![](client-server.png)

## HTTP Requests

A server stores the data, and the client (other programs or computers) requests data or sends some of its own. But how do they talk to each other?

**For the client and the server to communicate they need an established language (a protocol)**. Which is what HTTP (Hypertext Transfer Protocol) is for. It defines the methods you can use to communicate with a server and indicate your desired actions on the resources of the server.

There are two main types of requests: **GET** and **POST**.

| Request type  | Description   |
| ------------- |:-------------:|
| GET          | Ask for a specified resource (e.g. show me that photo) |
| POST          | Send content to the server (e.g. post a photo) |


HTTP is the language of the internet. In our case we're using Javascript, but you can send HTTP requests with other laguages as well.

## What is AJAX?

AJAX is a technique for implementing client-server communication in the browser.

Typically, the server holds the data, and only sends it to the client (web page) when there's a request. AJAX requests are sent after the page has loaded, usually in response to an action by the user. For example when the user clicks a button, some JavaScript will trigger an AJAX request to fetch data.

## Introduction to Fetch and asynchronous code

**fetch** is a way of creating HTTP requests in JavaScript.

```js
fetch('https://codeyourfuture.herokuapp.com/api/hello')
    .then(function(response) {
        return response.text(); // or response.json()
    })
    .then(function(text) {
        console.log(text); // Print 'Hello CodeYourFuture!'
    });
```


