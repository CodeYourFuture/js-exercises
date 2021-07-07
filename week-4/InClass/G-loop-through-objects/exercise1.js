let kitten1 = {
  name: "Fluffy",
  weeksOld: 2,
};

let kitten2 = {
  name: "Megatron",
  weeksOld: 1,
};

let kitten3 = {
  name: "Billy",
  weeksOld: 1,
};

let kittens = [kitten1, kitten2,kitten3];

function getName(kitten) {
  if (kitten.name.length >= 5)
  return kitten.name;
}

console.log(kittens.map(getName)); // should return ["Fluffy", "Megatron", "Billy"]
