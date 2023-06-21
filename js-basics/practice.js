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

/* Make array contents objects (NOT WORKING)
let backpack = ["Notebook", "Pen", "Protein Bar", "Laptop", "Headphones"]
convertArrayToObject(
    [
    backpack[0] = schoolSupplies;
    backpack[1] = schoolSupplies;
    backpack[2] = snacks;
    backpack[3] = technology;
    backpack[4] = technology;
    ]
); 

console.log(backpack.technology)*/ 