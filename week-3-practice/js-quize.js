function myFunction(input) {
  return input.join(", ");
}

const input = ["foo", "bar", "baz"];
const output = myFunction(input);

const expected = "foo, bar and baz";

if (output === expected) {
  console.log("Success! :o");
} else {
  console.log("Failure :o(");
  console.log(output, "was not", expected);
}
