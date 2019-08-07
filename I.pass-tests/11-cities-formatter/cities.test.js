var formatCities = require("./cities");

test("Cities", function() {
  var capitals = [
    { city: "Paris", country: "France" },
    { city: "Madrid", country: "Spain" },
    { city: "Rome", country: "Italy" }
  ];

  function transform({ city, country }) {
    return `${city} is the capital of ${country}`;
  }

  var expected = [
    "Paris is the capital of France",
    "Madrid is the capital of Spain",
    "Rome is the capital of Italy"
  ];

  var result = formatCities(capitals, transform);

  expect(result).toEqual(expected);
});
