const assert = require("assert");
const utils = require("../lib");

const A = { a: 1, b: 2, c: 3 };
const B = { b: 3, c: 4, d: 5 };

const C = utils.configure(B, A);

const test = (actual, expected, message) => {
  assert.deepEqual(actual, expected, message);
  console.log(`✓  ${message}`);
};

test(C, { a: 1, b: 3, c: 4, d: 5 }, "Flat configuration object");
