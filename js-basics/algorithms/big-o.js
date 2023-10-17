const data = ['A', 'B', 'C']
const data2 = [1, 2, 3, 4, 5]

// Algorithm 1 
// Print each element in data array
for (let i=0; i < data.length; i++) {
    // Constant for algorithm
    // Runs over and over to get result 
    console.log(data[i]); 
}; 

/* Time Complexity for Algorithm 1: 
As n grows, algorithm scales 1:1 with size of n
Big O: O(n) - Linear Complexity 
*/

//Algorithm 2
for (let j = 0; j < data2.length; j++) {
    console.log(data2[j]);
}; 
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}; 

/* Time Complexity for Algorithm 2:
Algorithm scales based on length of 2 separate arrays
Big O: O(n + a)
*/ 

//Algorithm 3
for (let j = 0; j < data2.length; j++) {
    for (let i = 0; i < data.length; i++) 
        console.log(data[i] + data2[j];);
}; 

/* Time Complexity for Algorithm 3:
Loops through every element of data2 and for every element 
of data2 it also loops through data 
n times for every single a time in loop
Big O: O(n * a)
*/ 