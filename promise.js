/*const milley = new Promise((resolve, reject) => {
  let downloadedImage = 11;
  if (downloadedImage === 10) {
    resolve("Image downloaded");
  } else {
    reject("Not downloaded");
  }
});
milley
  .catch(rej => console.log(rej))
  .then(res =>
    console.log(res)
  ); //remember the out put will be undefined for then()//extensible markup lanuage XML=> HTML
*/
const downloadedImage1 = new Promise((resolve, reject) => {
  //we don't use reject parameter
  resolve("Image not downloaded from this second");
});

downloadedImage1
  .then(res => {
    return milley;
  })
  .then(res)
  .catch(rej => console.log("Sorry: " + rej));

function milley() {
  return Promise.resolve();
}
milley();
