// C* = (F - 32) / (5/9)
const convertToCelsius = function(F) {
  let celcius = ((F-32) * 5/9);
  if (celcius % 1 != 0){
    celcius = Math.round(celcius*10) / 10;
  }
  return celcius;
};


//F* = (C * (9/5) + 32)
const convertToFahrenheit = function(C) {
  let fahrenheit = (C * (9/5) + 32);
  if (fahrenheit % 1 != 0){
    fahrenheit = Math.round(fahrenheit*10) / 10;
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
