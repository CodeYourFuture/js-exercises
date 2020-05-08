let animalKingdom = [
	["lion", "tiger", "cheetah"],
	["wolf", "fox", "dog", "hyena"],
];



// 1st item at index 0, line 2 - 6
// 2nd item at index 1, line 6 - 10
// const animalKingdom = [
//   // [
//   //   "mammals", 
//   //   ["dog", "wolf", "fox", "hound"],
//   //   ["cat", "lion", "tiger", "hound"],
//   // ],
//   [
//     "reptiles", 
//     ["lizard", "komodo dragon"],
//     ["dinosaur", "T-rex", "stegosaurus", "velociraptor"],
//     ["dragon"],
//   ],
// ]
const arrays = [
    [ // start - arrays[0]
      [
        "dog",
        "wolf",
        "fox",
        "hound"
      ], // "dog" - arrays[0][0][0]
      ["lizard", "komodo dragon"], // arrays[0][1]
      ["cat", "lion", "tiger"], // "tiger" - arrays[0][2][2]
    ],// end - arrays[0]
    [ // start - arrays[1]
      ["lizard", "komodo dragon"], // arrays[1][0]
      ["dog", "wolf", "fox", "hound"], // "fox" - arrays[1][1][2]
    ],// end - arrays[1]
    [ // arrays[2]
      ["dragon"], // arrays[2][0]
      ["cat", "lion", "tiger", "hound"], // arrays[2][1]
      ["lizard", "komodo dragon"], // arrays[2][2]
      ["dog", "wolf", "fox", "hound"], // arrays[2][2]
    ],
  ]
  // const animalKingdom = ['mammals', 'reptiles']
  const index = 1
  console.log(animalKingdom[index]);