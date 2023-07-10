var primeNumberArray = []

for (var i = 3; i < array.length; i++) {
    var pass = true
    if (primeNumberArray[i] % 2 == 0) {
        pass = false
    }
    else if (primeNumberArray[i] % 3 == 0) {
        pass = false
    }

    var multipleOfTwo = primeNumberArray[i] * 2
    var multipleOfThree = primeNumberArray[i] * 3

    if (multipleOfTwo < 100) {
        var multipleOfTwoIdx = array.find(multipleOfTwo)
        array.remove(multipleOfTowIdx)
    }

    if (multipleOfThree < 100) {
        var multipleOfThreeIdx = array.find(multipleOfTwo)
        array.remove(multipleOfThreeIdx)
    }

    if (pass == true) {
        primeNumberArray.append(primeNumberArray[i])
    }
}