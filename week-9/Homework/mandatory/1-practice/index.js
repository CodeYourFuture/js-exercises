const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);    

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);  {x:10}