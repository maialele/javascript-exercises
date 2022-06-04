const add = function(num1, num2) {
    let summ = num1 + num2;
    return summ;
	
};

const subtract = function(num1, num2) {
  let sub = num1 - num2;
  return sub;
	
};

const sum = function(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    summ += array[i];  
  }
  return summ;
};

const multiply = function(array) {
  let mul = 1;
  for (let i = 0; i < array.length; i++) {
    mul *= array[i];
  }
  return mul;
};

const power = function(num1, num2) {
  let pow = num1 ^ num2;
  return pow;
	
};

const factorial = function(num1) {
  let fact = 1;
  for(let i = num1; i > 0; i--) {
    fact *= i; 
  }
  return fact;

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
