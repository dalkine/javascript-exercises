const add = function(x,y) {
  return x+y;
	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(a) {
  let result=0;
  for(let index=0;index<a.length;index++){
    result=result+a[index];
  }
  return result;
	
};

const multiply = function(a) {
 let result=1;
  for(let index=0;index<a.length;index++){
    result=result*a[index];
  }
  return result;
};

const power = function(x,y) {
  let result=1;
  for(let i=0;i<y;i++){
    result=result*x;
  }
	return result;
};

const factorial = function(x) {
  if(x==0 || x==1){
    return 1;
  }else{
    return factorial(x-1)*x;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
