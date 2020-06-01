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
let listOfLanguages = Object.keys(languages);

function greet(language) {
  //write your code here
  language = language.toLowerCase();
  if (Object.keys(languages).includes(language)) return languages[language];
  return "Welcome";
}

console.log("This is a valid lowercase language ", greet("irish"));
console.log("This is a valid uppercase language ", greet("IRISH"));
console.log(
  "This is a language that doesn't exist in the object",
  greet("russian")
);
console.log(
  "This is an invalid string (something that is not even a language)",
  greet("47()£$%")
);

/*
Test your function works correctly calling it inside a console.log(), for each one of these cases:

1. pass it a valid lowercase language

For example: console.log(greet("irish"));

2. pass it a valid uppercase language
3. pass it a language that doesn't exist in the object
4. pass it an invalid string (something that is not even a language)

*/
