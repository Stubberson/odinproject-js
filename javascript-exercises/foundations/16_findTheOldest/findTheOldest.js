const findTheOldest = function(array) {
    // Add missing data
    array.forEach(person => {
        // Nullish operator only does the assignment if the left side is "nullish" (undefined or null)
        person['yearOfDeath'] ??= new Date().getFullYear()
    })
    // Sort the modified array in decreasing order and return the first element (oldest)
    return array.sort((a, b) => (b['yearOfDeath'] - b['yearOfBirth']) - (a['yearOfDeath'] - a['yearOfBirth']))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
