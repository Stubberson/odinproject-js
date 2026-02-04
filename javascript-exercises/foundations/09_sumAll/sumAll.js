const sumAll = function(a, b) {
    // Only accept positive integers
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return 'ERROR'

    let start = Math.min(a, b)
    let end = Math.max(a, b)
    // The {length: x} is an array-like object with the desired length
    let array = Array.from({length: end - start + 1}, (_, index) => start + index)
    return array.reduce((acc, current) => acc + current)
};

// Do not edit below this line
module.exports = sumAll;
