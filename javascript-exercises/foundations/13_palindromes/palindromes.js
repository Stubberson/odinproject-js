const palindromes = function (string) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('')

    // Make use of splitting into chars again
    const reversedString = cleanedString
        .split('')
        .reverse()
        .join('')
    
    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
