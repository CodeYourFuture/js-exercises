let people = ['alice', 'bob', 'eve', 'diffie']

let mapping = people.map((item, index, array) => array[0])
let mappingPeople = [people, people, people, people]
console.log(mapping)
console.log(mappingPeople)