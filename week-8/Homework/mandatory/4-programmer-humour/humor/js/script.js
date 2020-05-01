fetch(`https://xkcd.com/info.0.json`)
.then(function(result){
    return result.json();
})
.then(function(pic){
    console.log(pic);
    let h1 = document.querySelector("h1");
    let img = document. createElement("img");
    h1.appendChild(img);
    img.href = pic.img;
})
.catch(error){
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
  