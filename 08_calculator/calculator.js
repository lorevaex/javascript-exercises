const add = function(int1, int2) {
  return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(arr) {

  return arr.reduce((current_sum, int_in) => current_sum + int_in, 0);
};

const multiply = function(arr) {
  return  arr.reduce((current_product, int_in) => current_product*int_in, 1);

};

const power = function(int1, int2) {
	return Math.pow(int1, int2);
};

const factorial = function(n) {
  
  let product = 1;
  while (n > 0) {
    product *= n;
    n = n - 1;
  }

  return product;
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
