const fibonacci = function(a) {
    a = parseInt(a)
    if (a > 0) {
        // Create the fibonacci sequence
        const sequenceLength = a  // We don't have to go any further than the given number
        const sequence = [1, 1]  // Our sequence is 1, 1, 2, 3, 5, 8 etc.            
        for (let i = 2; i < sequenceLength; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2]
        }
        // Return the value at queried index
        return sequence[a - 1]
    } else if (a === 0) {
        return 0
    } else {
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;
