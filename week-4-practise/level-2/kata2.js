let firstName = { A: 'Alpha', B: 'Beta', C: 'Cache'};
let surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst'};
let firstNameKeys = firstName.keys();
let lastNameKeys = lastName.keys();
function aliasGen(firstNamePassed, lastNamePassed) {
    aliedFirstName = firstNameKeys
    .find(key => 
        firstNamePassed.charAt(0).toLowerCase() === key.toLowerCase()
    );
    // Code Here
}
// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'