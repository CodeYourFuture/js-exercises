fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities") // take json
  .then(response => response.json()) // if success transform json in JS object
  .then(data => {
    console.log(data[0]);
    // for (var i = 0; i < data.length; i++) {
    //   if (data[i].city === inputText) {
    //     var ouData = document.createElement("p");
    //     ouData.innerHTML = data[i];
    //     document.getElementById().appendChild(ouData);
    //   }
    // }
  });
