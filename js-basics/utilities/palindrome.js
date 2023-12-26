// .split() splits each character into array
// .reverse() reverses the direction of the array
// .join() puts characters into 'word' variable as single word 


const palindromes = function (word) {
     let noSpace = word.replace(/\s+/g, '').toLowerCase();
     let newWord = noSpace.split('').reverse().join(''); 
     return noSpace === newWord;
};