const removeFromArray = function (array, ...extract) {
  let args = extract;
  let result = array;

  for (let index = 0; index < args.length; index++) {
    result = result.filter((element) => element !== args[index]);
  }

  return result;
};
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
