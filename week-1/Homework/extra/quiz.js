let descriptions = {
'a': 'talks a lot',
'b': 'listens a lot',
'c': 'stops eve',
'e': 'tries to liste'
}

let people = ['alice', 'bob', 'eve', 'diffie']

let observation = ''

people.forEach(function (person, i) { //person = 'diffie' i = 3 
  let initial = person.charAt(0) //initial = 'd'
  observation += person + ' ' + descriptions[initial] 
  //'alice talks a lot, bob listens a lot, eve tries to liste and diffie undefined' 

  if (i < people.length -2) { // 3 < 2 = false
      observation += ', ' // 'alice talks a lot, bob listens a lot, ' 
  } else if (i < people.length -1) { //3 < 3 = false
    observation += ' and ' // 'alice talks a lot, bob listens a lot, eve tries to liste and ' 
  }
})

console.log(observation) //print 'alice talks a lot, bob listens a lot, eve tries to liste and diffie undefined'