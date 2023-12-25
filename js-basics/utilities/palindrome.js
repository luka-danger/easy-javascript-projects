const palindrome = function (word) {
    let reverseWord = []
    for (letter in word) {
        reverseWord.add(letter)
    }
    if (reverseWord === word) {
        return true;
    } else {
        return false; 
    }
};