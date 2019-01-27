Complete the following CodeWars exercises. Go to the webpages below and follow the instructions there.

Click "ATTEMPT" to test your solution.

Exercises:

- https://www.codewars.com/kata/welcome/train/javascript

var audience = {
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
};

function greet(language) {
if (audience.hasOwnProperty(language)) {
return audience[language];
} else {
return audience.english;
}
}
