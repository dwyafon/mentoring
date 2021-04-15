const hello = require("./hello");

test("returns hello", () => {
  expect(hello()).toBe("hello");
});
