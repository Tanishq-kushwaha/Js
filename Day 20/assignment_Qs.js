// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array. 
let arr = [1, 2, 3, 4, 5];

let square = arr.map((el) => el * el);
console.log(square);//[1, 4, 9, 16, 25]

let arrSum = arr.reduce((acc, current) => acc + current, 0);
console.log(arrSum);//15

let average = arrSum / arr.length;
console.log(average);//3

// Step 1 & 2: Chaining map and reduce
let sum = arr.map((el) => el * el).reduce((acc, cu) => acc + cu, 0); 

// Step 3: Finding Average
let avg = sum / arr.length; 

console.log(avg); // Output: 11

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.