/*
The given object shows the population of largest cities in UK
You need to extract some information from it
The numbers are fake
*/
var UKBigCitiesInMillions = {
  Manchester: 2.5,
  London: 12.5,
  Birmingham: 1.8,
  Glasgow: 2,
  Newcastle: 1.5,
  Cardiff: 0.9,
  Swansea: 0.25,
  Edinburgh: 0.7,
};
//1- We discovered a small error in the calculations, we need to add 200 thousdands to each city under 1 million
//create a loop that write the names of the city over 1 million only to the console
// Example : "The city of x has a popluation of 1.5 million"
for (let city in UKBigCitiesInMillions) {
  if(UKBigCitiesInMillions[city] >= 1.0)
    console.log(
      "The city of " +
        city +
        " has a popluation of " +
        UKBigCitiesInMillions[city] +
        "million")
      
  }

//2-We need to know in which area each city is
//we looking for an output like "x is in Scotland and has population of y millions"

var Scotland = ["Glasgow", "Edinburgh"];
var England = ["Manchester", "Birmingham", "London", "Newcastle"];
var Wales = ["Cardiff", "Swansea"];

for (let city in UKBigCitiesInMillions) {
  if (Scotland.includes(city)) {
    console.log(
      city + " is in Scotland  " + UKBigCitiesInMillions[city] + " million"
    );
  } else if (England.includes(city)) {
    console.log(
      city + " is in England  " + UKBigCitiesInMillions[city] + " million"
    );
  } else {
    console.log(
      city + " is in Wales  " + UKBigCitiesInMillions[city] + " million"
    );
  }
}
