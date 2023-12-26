const palindromes = function (word) {
    // .split() splits each character into array
    // .reverse() reverses the direction of the array
    // .join() puts characters into 'word' variable as single word 
    return word == word.split('').reverse().join('');
};