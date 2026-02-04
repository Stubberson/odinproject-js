// A leap year is a year which is both evenly divisible by 4 and not divisible by 100
// or is evenly divisible by 400.
const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) return true
    else return false
};

// Do not edit below this line
module.exports = leapYears;
