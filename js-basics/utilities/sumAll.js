const sumAll = function (num1, num2) {
    let sumsOfNumber = 0;
    for (let i = num1; i <= num2; i++) {
        // Addition assignment adds i to sumsOfNumber
        // With each iteration of i
        sumsOfNumber += i;
    }
    // Returns the sum of all numbers between num1 and num2
    // Including num1 and num2 (ex: 1 + 2 + 3 + 4)
    return sumsOfNumber;
};

// Test that function works correctly 
// sumAll(1, 4) should display '10' on terminal 
console.log(sumAll(1, 4))