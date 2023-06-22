// Array 1
const fruits = ["apples", "bananas", "oranges"];
fruits.unshift("watermelon");
console.log("I bought " + fruits.join(" and "));

// Array Option 2
const fruitList = [
    "kiwi",
    "pineapple",
    "cherry"
]

// Replace kiwi with mango
fruitList[0] = "mango"
// Add grapes to end of list
fruitList[3] = "grapes"

bigList = fruits.concat(fruitList);
console.log(bigList)
console.log(bigList.sort())

// Implement method to insert items to a specific index of array
Array.prototype.insert = function (index, items) {
    this.splice(index, 0, items);
};
// Add and between last two fruits
bigList.insert(7, " and ")
console.log(`My favorite fruits are ${bigList}`)
// Remove and between last two fruits
bigList.splice(7, 1)

// 1 is index, 0 is how many elements are removed
fruits.splice(1, 0, "tomato", "green beans")
console.log(`Grocery List: ${fruits}`)
console.log(bigList.slice(1, 3))

// Object 1
let waffles = { name: "Waffles", species: "Dog", age: 4, isCute: true }
console.log(waffles.isCute)

// Object 2
let runVest = {
    color: "Blue",
    brand: "Ultimate Direction",
    numOfPockets: 5,
    hasWaterBottle: true,
};

runVest.color = "gray"
console.log(runVest.color)

// For Loop Practice
newFruitList = [];
for (i = 1; i <= fruitList.length; i++) {
    fruit = fruitList[i - 1];
    newFruitList.push(fruit);
    console.log(`The fruitList array contains ${i} fruits: ` + newFruitList)
}

// For...of loop displays each fruit individually
for (fruit of bigList) {
    console.log(fruit);
}

// Return string as all upper case 
function upperCase(string) {
    return string.toUpperCase()
}

whyAreYouYelling = bigList.map(upperCase)
console.log(whyAreYouYelling.toString())

// Return string as all lower case 
function whisper(string) {
    return string.toLowerCase()
}

let greeting = "HELLO"
console.log(whisper(greeting))

const bigCat = ["Cougar", "Lion", "Tiger", "Cheetah", "Leopard"]

// Return cats that start with letter C
function catsWithC(cat) {
    return cat.startsWith("C");
}

// Search bigCat array for cats that start w/ "c"
console.log(bigCat.filter(catsWithC));

// for (initializer, condition, final expression)
for (let i = 1; i < 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}