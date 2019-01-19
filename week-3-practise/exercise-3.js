/* In Turkish Language, some of the words are joined words and 
they are written together. Create a new function in order to get a 
new array with the joined words of each items in the array*/

var newWords = [
  { firstword: "Ata", lastword: "turk" },
  { firstword: "Galata", lastword: "saray" },
  { firstword: "Eski", lastword: "sehir" }
];
var fullWord = [];
newWords.forEach(word => {
  word.firstword.concat(word.lastword);

  fullWord.push(word.firstword.concat(word.lastword));
});
console.log(fullWord.join());
/* EXPECTED RESULT
 -----------
Ataturk, Galatasaray, Eskisehir
 */
