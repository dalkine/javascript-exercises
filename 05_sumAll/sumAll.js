const sumAll = function (startnum, endnum) {
  let result = 0;
  if (startnum > endnum) {
    let aux = startnum;
    startnum = endnum;
    endnum = aux;
  }
  if (
    typeof startnum !== "number" ||
    typeof endnum !== "number" ||
    endnum < 0 ||
    startnum < 0
  ) {
    result = "ERROR";
  } else {
    for (let index = startnum; index <= endnum; index++) {
      result += index;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
