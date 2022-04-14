const googleSearch = require("./GoogleSimulator.js");

const dbMock = ["test.com", "test1.com", "dog.net"];

it("This is a test", () => {
  expect("Hello").toBe("Hello");
});

describe("It tests googleSearch function", () => {
  it("checks if function is imported or not", () => {
    console.log(googleSearch);
  });

  it("checks if returns correct output", () => {
    expect(googleSearch("Hijhj", dbMock)).toEqual([]);
  });

  it("checks if returns correct output", () => {
    expect(googleSearch("test", dbMock)).toEqual(["test.com", "test1.com"]);
  });
});
