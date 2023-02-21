//When a user inputs an integer
//Use a for loop to loop from the number one to the entered number 
//If a number can be divided by 3 with no remainder, print "Fizz"
//If a number can be divided by 5 with no remainder, print "Buzz"
//If a number can be divided by both 3 and 5 with no remainder, print "FizzBuzz"
//Else print the entered number and then break the loop (do you need to add a break with a for loop?)

let fizz_buzz = parseInt(prompt("Please enter a number to FizzBuzz up to: \n"))

for (let i = 1; i <= fizz_buzz; i++) {
    if (i%3 == 0 && i%5 == 0) {
      console.log("FizzBuzz");
    } else if (i%3 == 0) {
        console.log("Fizz"); 
    } else if (i%5 == 0) {
        console.log("Buzz"); 
    } else {
    console.log(i); 
    } 
}