const convertToCelsius = function(F) {
// x °F = (x − 32) * ⁠5/9°C
  return parseFloat(((F - 32) * (5/9)).toFixed(1))
};

const convertToFahrenheit = function(C) {
// x °C = (x * 9/5 + 32) °F
  return parseFloat((C * (9/5) + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
