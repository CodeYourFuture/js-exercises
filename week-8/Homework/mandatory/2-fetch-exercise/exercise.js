
fetch ('https://codeyourfuture.herokuapp.com/api/greetings')
  .then (function (response) {
    return response.text ();
  })
  .then (function (greeting) {
    document.querySelector ('#greeting-text').innerHTML = greeting;
  });
