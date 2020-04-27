
// This function should retrieve the JSON from the `countryURL` and then call onCountryDataReceived() with the JSON
console.log('min')

function getData(countryURL) {
  fetch(countryURL)
  .then(res=>{
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${res.status} ${res.statusText}`
      );
    }
  }
  )
  .then(data=>{
    
    onCountryDataReceived(data)
  }
    )
  .catch((error)=>{console.log(error)})
}

function onCountryDataReceived(country) {

  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}
const div = document.getElementById('content')
// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {
countryData.forEach(country=>
  div.innerHTML  +=`<h1>${country.name}</h1>`
  )
}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {
  countryData.forEach(country=>
    div.innerHTML +=`<h2>${country.capital}</h2>`
    )
}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {
  countryData.forEach(country=>{
    for(let lang in country.translations){
      div.innerHTML+=`
      <ul>
        <li>${country.translations[lang]}</li>
      </ul>
      `
    }})
}

function getContentDiv() {
  return document.querySelector("#content");
}
function onLoad() {
  getData(
    "https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true"
  );

     getData("https://restcountries.eu/rest/v2/name/France?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Germany?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Spain?fullText=true");

     getData("https://restcountries.eu/rest/v2/name/Portugal?fullText=true");

    getData("https://restcountries.eu/rest/v2/name/Hungary?fullText=true");

     getData("https://restcountries.eu/rest/v2/name/Russia?fullText=true");

  }

window.onload = onLoad;