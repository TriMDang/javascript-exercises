const add = function(a, b) {
  return (a + b);
};

const subtract = function(a, b) {
  return (a - b);
};

const sum = function(array) {
  return (array.reduce((acc, value, index) => acc + value, 0));
};

const multiply = function(array) {
  return (array.reduce((acc, num) => acc * num , 1));
};

const power = function(a, b) {
  return (a ** b);	
};

const factorial = function(int) {
  let total = 1;
  for (i = int; i > 0; i--){
    total *= i;
    console.log (i);
  };
  return (total);
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
