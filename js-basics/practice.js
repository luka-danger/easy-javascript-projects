// Array 1
const fruits = ["apples", "bananas", "oranges"];

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

// Implement method to insert items to a specific index of array
Array.prototype.insert = function (index, items) {
    this.splice(index, 0, items);
};
// Add and between bananas and oranges
fruits.insert(2, "and")
let fruitString = fruits.toString();
console.log(`My favorite fruits are ${fruitString}`)