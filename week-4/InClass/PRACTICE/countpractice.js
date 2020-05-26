// var output = [];
// var count = 1;

// function fizzBuzz() {
   
// output = output.push(count);         
// count++

//    console.log(ouput); 
// }
// fizzBuzz()


//Array methods. filter. 

//filter objects

//A common use case of .filter() is with an array of objects 
//through their properties:

// let heroes = [

//     heroe1 = {name: "Thor", franchise: "Marvel"},
//     heroe2 = {name: "superman", franchise: "DC"} 

// ];

let hero = {name: "Thor", franchise: "Marvel"}

// const marvelHeroes = heroes.filter(name => name.franchise === "Marvel")

// function getHeroesName(city) {
//     return city.destinationName;
//   }
  ///1  ///
//   let destinationNamesWithin500Kms = travelDestinations
//     .filter((city) => city.distanceKms <= 500)

  let heroName = hero.filter((name) => name === "Thor")
  console.log(heroesMovie)