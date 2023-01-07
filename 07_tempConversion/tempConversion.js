<<<<<<< HEAD
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
=======
const convertToCelsius = function() {
};

const convertToFahrenheit = function() {
>>>>>>> 8746ce056a6f66635923d079a868934aa84b8a7c
};

// Do not edit below this line
module.exports = {
<<<<<<< HEAD
  ftoc,
  ctof,
=======
  convertToCelsius,
  convertToFahrenheit
>>>>>>> 8746ce056a6f66635923d079a868934aa84b8a7c
};
