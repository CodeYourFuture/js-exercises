 fetch(`https://xkcd.now.sh/?comic=latest`)
.then(function(result){
    return result.json();
})
.then(function(pic){
    console.log(pic);

    let h1 = document.querySelector("h1");
    let img = document. createElement("img");
    h1.appendChild(img);
    img.src = pic.img;
});
// catch(error){
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }