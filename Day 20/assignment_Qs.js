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
let array = [1, 4, 5, 7, 8, 9, 0, -2, -4, -6, -10];
let newArr = array.map((el) => el + 5);
console.log(newArr);// [6, 9, 10, 12, 13, 14, 5, 3, 1, -1, -5]





// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

let words = ["focus", "hustle", "code", "win"];

let loudWords = words.map((word) => word.toUpperCase());
console.log(loudWords);// ['FOCUS', 'HUSTLE', 'CODE', 'WIN']

// if provided array have numbers than how can  collect  string and covert into uppercase
let mixedData = [10, "focus", 42, "hustle", "win", 99];

let upperCaseStrings = mixedData.filter((el) => typeof el === "string").map((el) => el.toUpperCase());

console.log(upperCaseStrings);

//Qs4. write a function doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled. 

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((num) => num * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3, 4, 5,], 2, 3, 4, 5, 6,));//[1, 2, 3, 4, 5, 4, 6, 8, 10, 12]

console.log(doubleAndReturnArgs([1, 2, 3], 1, 2, 3));//[1, 2, 3, 2, 4, 6]


//Qs5. write a function called mergeObjects that accepts two objects and return a new object which contains all the keys and values of the first object and second object 


const obj1 = {
    name: "tanishq",
    collage: "GPK",
    branch: "IT"
};

const obj2 = {
    name: "prince",
    collage: "GPL",
    branch: "TT"
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects(obj1, obj2));