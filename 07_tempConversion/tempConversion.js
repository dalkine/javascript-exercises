function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
const ftoc = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  celsius = round(celsius, 1);
  return celsius;
};

const ctof = function (temp) {
  let far = temp * (9 / 5) + 32;
  far = round(far, 1);
  return far;
  //[°C] × 9⁄5 + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
