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

/* Space Complexity for Algorithm 1: 
Space complexity is zero, not adding extra space
because not creating any elements; 
Space does not change as input scales 

Big O: O(1)
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

//Algorithm 4
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data.length; i++) 
        console.log(data[i] + data[j]);
}; 

/* Time Complexity for Algorithm 4:
Every time n is looped through, loop through for 
each element of n (nxn or n^2)
Big O: O(n^2) - Quadratic Complexity  

This grows quickly - Poor performance at scale! 
For input of 3, have to log 9 times.
For 100 inputs, have to log 10,000 times...
*/ 

//Algorithm 5
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data.length; i++) 
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);
        console.log(data[i] + data[j]);

}; 

/* Time Complexity for Algorithm 5:
O(4n^2) --> remove constants, 4 is just based on input
n^2 tells us how algorithm grows over time 

Big O: O(n^2) - Quadratic Complexity  
*/ 

//Algorithm 6
for (let j = 0; j < data.length; j++) {
    for (let i = 0; i < data.length; i++) 
        console.log(data[i] + data[j]);
}; 

for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
}; 

/* Time Complexity for Algorithm 6:
O(n^2 + n) --> Simplify and drop all constants that scale slower
n^2 grows quicker than n, so can simplify 
Big O: O(n^2)
*/ 

// Algorithm 7
for (let i=0; i < data.length; i++) {
    // Add elements from data to out 
    out[i] = data[1]; 
}; 

/* Space Complexity for Algorithm 7: 
Space scales at same size as number of elements 

Big O: O(n) - Linear 
*/

// Algorithm 8
for (let i=0; i < data.length; i++) {
    out[i] = []; 
    for (let j = 0; j < data.length; j++) 
        out[i][j] = data[i]; 
}; 

/* Space Complexity for Algorithm 8: 
Output 3 new arrays, so will output each item in array
3 times (A, B, C); 3 arrays x 3 elements = 3 x 3 or 3^2

Big O: O(n^2) - Quadratic
*/