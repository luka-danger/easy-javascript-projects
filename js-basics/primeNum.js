let primeNumberArray = []

for (let i = 3; i < primeNumberArray.length; i++) {
    let pass = true
    if (primeNumberArray[i] % 2 == 0) {
        pass = false
    }
    else if (primeNumberArray[i] % 3 == 0) {
        pass = false
    }

    let multipleOfTwo = primeNumberArray[i] * 2
    let multipleOfThree = primeNumberArray[i] * 3

    if (multipleOfTwo < 100) {
        let multipleOfTwoIdx = array.find(multipleOfTwo)
        array.remove(multipleOfTowIdx)
    }

    if (multipleOfThree < 100) {
        let multipleOfThreeIdx = array.find(multipleOfTwo)
        array.remove(multipleOfThreeIdx)
    }

    if (pass == true) {
        primeNumberArray.append(primeNumberArray[i])
    }
}