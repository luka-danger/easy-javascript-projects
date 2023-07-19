const sumAll = function (num1, num2) {
    let sumsOfNumber = 0;
    for (let i = num1; i <= num2; i++) {
        sumsOfNumber += i;
    }
    return sumsOfNumber;
};

console.log(sumAll(1, 4))