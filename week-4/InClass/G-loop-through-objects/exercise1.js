let kitten1 = {
  name: "Fluffy",
  weeksOld: 2,
};

let kitten2 = {
  name: "Megatron",
  weeksOld: 1,
};

let kittens = [kitten1, kitten2];

function getName(kitten) {
  return kitten.name.length === 5;
}

kittens.map(getName); // should return ["Fluffy", "Megatron", "Billy"]
