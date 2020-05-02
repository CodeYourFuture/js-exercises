function getData() {
    fetch(`https://xkcd.now.sh/?comic=latest`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => render(data))
      .catch((error) => console.log(error));
  }

  function render (data) {
    console.log (data);
    let imgElement = document.createElement ('img');
    imgElement.src = data.img;
    document.querySelector ('#content').appendChild (imgElement);
  }
getData();