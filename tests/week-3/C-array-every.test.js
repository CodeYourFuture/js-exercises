const { hasOnlyStudents } = require("../../week-3/C-array-every/exercise");

describe("C-array-every", () => {
  it("should return true when there are only students", () => {
    const group = ["Austine", "Dany", "Swathi", "Lesley"];
    const groupIsOnlyStudents = hasOnlyStudents(group);
    expect(groupIsOnlyStudents).toBe(true);
  });

  it("should return false when there are not only students", () => {
    const group = ["Austine", "Dany", "Swathi", "Daniel"];
    const groupIsOnlyStudents = hasOnlyStudents(group);
    expect(groupIsOnlyStudents).toBe(false);
  });
});
