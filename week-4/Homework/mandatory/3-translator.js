const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

/*
Write a 'greet' function that takes a parameter 'language' (always a string), 
and returns the greeting for that language - if it exists in your "languages" object.

It should default to English if the language is not in your object of languages,
or in the event of an invalid input.
*/

function greet(language) {
  let findingKeys = Object.keys(languages);
  if (findingKeys.includes(language)) {
    return languages[language];
  } else {
    return languages["english"];
  }
}

/*
Test your function works correctly calling it inside a console.log(), for each one of these cases:

1. pass it a valid lowercase language

For example: console.log(greet("irish"));*/
console.log(greet("swedish"));
// 2. pass it a valid uppercase language
console.log(greet("CZECH"));
// 3. pass it a language that doesn't exist in the object
console.log(greet("turkish"));
//4. pass it an invalid string (something that is not even a language)
console.log(greet("Good morning"));
