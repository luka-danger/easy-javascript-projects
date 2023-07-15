/*let word = "nice"
let numOfWords = word.length 
console.log(word[numOfWords - 1])*/ 

const reverseString = function(word) {
    let reversed = ""; 
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += i
    }
    console.log(reversed); 
} 

reverseString("hello")