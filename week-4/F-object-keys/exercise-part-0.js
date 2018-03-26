/*

Return the keys of the following object

*/

var capitalCities = {
  scotland: 'Edinburgh',
  kenya: 'Nairobi',
  australia: 'Canberra',
  canada: 'Ottawa'
};

var highScores = {
  55: 'Alistair',
  100: 'David',
  89: 'Hannah',
  34: ['Sergi', 'Frank',]
};

// ONLY EDIT BELOW HERE

var capitalCitiesKeys = Object.keys(capitalCities);
var highScoresKeys = Object.keys(highScores); // why it prints 34 first though? it sorts first?

// ONLY EDIT ABOVE HERE

console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]

console.log(highScoresKeys)
// prints ['34, '55', '89', '100']
