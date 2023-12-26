const palindromes = (word) => {
    //
    let noSpace = word.replace(/\s+/g, '').toLowerCase();
    // .split() splits each character into array
    // .reverse() reverses the direction of the array
    // .join() puts characters into 'word' variable as single word 
    let originalWord = noSpace.split('').reverse().join(''); 
    return noSpace === originalWord;
};