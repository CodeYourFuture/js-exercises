/*A common use case of .filter() is with an array of objects 
through their properties: */

let heroes = [

    heroe1 = {name: "Thor", franchise: "Marvel"},
    heroe2 = {name: "superman", franchise: "DC"}, 
    heroe3 = {name: "catwoman", franchise: "Marvel"} 

];



let movieFranchise = heroes
.filter(franchise => franchise === "Marvel")

console.log(movieFranchise)