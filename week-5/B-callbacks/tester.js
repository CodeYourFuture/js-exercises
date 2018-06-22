
function greetPeople(people) {
    var greeting = '';

    people.forEach(function (person) {
        greeting = greeting + ' hello '+person;
    });

    return greeting;
}

module.exports = greetPeople;
var mentors = ['dgh','dyuy','dhj']
console.log(greetPeople(mentors))

function removeVowels(word) {
    var characters = word.split('');

    var result = [];

    characters.forEach(function (character) {
        if (character === 'a' || character === 'o' || character === 'i' || character === 'e'
            || character === 'u' || character === 'y') {
            result.push(character)
        } else {
            result.push('_')
        }
    })

    return result.join('');
}

module.exports = removeVowels;
console.log(removeVowels('samuel'));