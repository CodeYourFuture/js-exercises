/*
    1. Fetch the "people" array from the "data.json" file
    2. And console.log() the name of the first person.

    Remember to open "index.html" using Live Preview, and test that you get the correct results in the console!
    (you should see "Alex")
 */
fetch("data.json")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  .then(function (person) {
    console.log(person[0].name);
  });
