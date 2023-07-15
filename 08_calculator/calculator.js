const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
	
};

const sum = function() {
  return arguments[0].reduce((sum, current) => sum + current, 0);
	
};

const multiply = function() {
  arr = Array.from(arguments);
  return arr.reduce((total, current) => total * current, 1);

};

const power = function(base, power) {
  return Math.pow(base, power);
	
};

const factorial = function(num) {
  let result = 1;
  for(let i = 1; i <= num; i ++){
    result = result * i;
  }
  return result;
	
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
