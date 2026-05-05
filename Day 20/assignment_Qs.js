// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array. 
let arr = [1, 2, 3, 4, 5];

let square = arr.map((el) => el * el);
console.log(square);//[1, 4, 9, 16, 25]

let arrSum = arr.reduce((el, next)=> el+next,0);
console.log(arrSum);//15

let average = arrSum / arr.length;
console.log(average);