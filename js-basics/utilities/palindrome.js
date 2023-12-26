// Methods Documentation: 

// '/' starts expression 
// \s represents any whitespace
// + represents multiple instances of \s
// /g represents 'global' (look for all instances in entire string)
// .split() splits each character into array
// .reverse() reverses the direction of the array
// .join() puts characters into 'word' variable as single word 

const palindromeChecker = (word) => {
    let noSpace = word.replace(/\s+/g, '').toLowerCase();
    let reverseWord = noSpace.split('').reverse().join(''); 
    return noSpace === reverseWord;
}; 
