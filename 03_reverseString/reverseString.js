const reverseString = function (strings) {
  let array = strings.split(" ");
  let result = [];
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    element = element.split("");
    element.reverse();
    result.push(element.join(""));
  }
  result.reverse();
  result = result.join(" ");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
