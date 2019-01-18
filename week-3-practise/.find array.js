/*You are given an array of countries
Use .find(), to find the first country which starts with T and is equal or longer to 7 letters*/

function firstCountryStartWithT(country) {
  return country[0] === "T" && country.length > 6;
}

var countries = ["Togo", "Tonga", "Tobago", "Tunisia", "Turkey"];

var longThatStartWithT = countries.find(firstCountryStartWithT); // complete this statement.

console.log(longThatStartWithT);

//Expected output 'Tunisia'
