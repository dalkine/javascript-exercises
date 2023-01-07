<<<<<<< HEAD
const { ftoc, ctof } = require("./tempConversion");

describe("ftoc", () => {
  test("works", () => {
    expect(ftoc(32)).toEqual(0);
  });
  test("rounds to 1 decimal", () => {
    expect(ftoc(100)).toEqual(37.8);
  });
  test("works with negatives", () => {
    expect(ftoc(-100)).toEqual(-73.3);
  });
});

describe("ctof", () => {
  test("works", () => {
    expect(ctof(0)).toEqual(32);
  });
  test("rounds to 1 decimal", () => {
    expect(ctof(73.2)).toEqual(163.8);
  });
  test("works with negatives", () => {
    expect(ctof(-10)).toEqual(14);
=======
const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')

describe('convertToCelsius', () => {
  test('works', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test.skip('works', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
>>>>>>> 8746ce056a6f66635923d079a868934aa84b8a7c
  });
});
