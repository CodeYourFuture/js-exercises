let nextImg = document.getElementById("next");

nextImg.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })

    .then((response) => {
      let dogImgList = document.getElementById("dogList");
      dogImgList.innerHTML += `<li><img src="${response.message}"></li>`;
      console.log(data.message);
    })

    .catch((err) => console.log(err));
});
