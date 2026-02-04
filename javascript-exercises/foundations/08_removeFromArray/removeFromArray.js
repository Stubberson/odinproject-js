const removeFromArray = function(array, ...items) {
    return array.filter(item => items.includes(item) === false)
}

// Do not edit below this line
module.exports = removeFromArray;
