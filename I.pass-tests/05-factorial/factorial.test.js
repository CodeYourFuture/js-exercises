var factorial = require("./factorial");

describe("Factorial", function() {
  test("Factorial", function() {
    var in1 = 5;
    var exp1 = 120;

    var in2 = 9;
    var exp2 = 362880;

    var in3 = 1;
    var exp3 = 1;

    var in4 = 0;
    var exp4 = 1;

    var in5 = 3;
    var exp5 = 6;

    var out1 = factorial(in1);
    var out2 = factorial(in2);
    var out3 = factorial(in3);
    var out4 = factorial(in4);
    var out5 = factorial(in5);

    expect(out1).toEqual(exp1);
    expect(out2).toEqual(exp2);
    expect(out3).toEqual(exp3);
    expect(out4).toEqual(exp4);
    expect(out5).toEqual(exp5);
  });
});
