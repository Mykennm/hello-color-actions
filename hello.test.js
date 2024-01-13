const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Olá Mundo! Ass.: Myke.");
  });
});
