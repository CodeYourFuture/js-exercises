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
  return kitten.name;
}

kittens.push((kitten3 = { name: "Billy", weeksOld: 0 }));

kittens.map(getName); // should return ["Fluffy", "Megatron", "Billy"]

console.log(kittens.map(getName));
