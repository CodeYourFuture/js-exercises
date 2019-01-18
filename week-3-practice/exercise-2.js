/* 
  You are given an array of names of musical artists.
  Using .find(), we'd like to find the artists whose first name which starts with S and is shorter than 5 letters, who is also, coincidentally, the best artist from the array!
*/

// write your code here

var namesOfMusicalArtists = [
  "Prince",
  "Elvis",
  "Sade",
  "Beatles",
  "Madonna",
  "Adele"
];

//function isShortWiths(name) {
//
//}
var shortNameThatStartsWithS = namesOfMusicalArtists.find(name => {
  return name.length < 5 && name[0] == "S";
});

console.log(shortNameThatStartsWithS);

// Expected output = "Sade"
//BTW, Yes Sade is the best artist from that array, it’s a close call between her and Prince, but don’t start talking to me about Adele, please.
