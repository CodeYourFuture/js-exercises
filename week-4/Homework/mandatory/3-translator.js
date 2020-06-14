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

console.log(languages.english);
console.log(languages["english"]);
/*
Write a 'greet' function that takes a parameter 'language' (always a string), 
and returns the greeting for that language - if it exists in your "languages" object.

It should default to English if the language is not in your object of languages, 
or in the event of an invalid input.
*/



function greet(language) {

  if (typeof language === "string") {
    let lang = language.toLowerCase();
    if (Object.keys(languages).includes(lang)) {
      return languages[lang];
    } else {
      return languages.english;
    }
  } else {
    return "that's not a language";
  }
}  
  

console.log(greet("irish"));
console.log(greet("FINNish"));
console.log(greet("russian"));
console.log(greet(6));
return languages[language];
}

/*
Test your function works correctly calling it inside a console.log(), for each one of these cases:

1. pass it a valid lowercase language

For example: console.log(greet("irish"));

2. pass it a valid uppercase language
3. pass it a language that doesn't exist in the object
4. pass it an invalid string (something that is not even a language)

*/
