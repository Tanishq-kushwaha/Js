// Replace method
let str = "Ilovecoding";
// Replaced 'Love' with 'do' 
str.replace("love", "do");
// Replaced 'o' with 'X', but only the first 'o' will change.
str.replace("o", "x");


// repeat method
let str1 = "papa ji";
str1.repeat(3); /// Papa ji repeated three times.

// practice Qs

// for the given string 
// Trim it and convert it to uppercase
let msg = "help!";
console.log(msg.trim().toUpperCase());


// separate the "college" part in following string & replace 'l' with 't' in it
let name1 = "apnacollege";
console.log(name1.slice(4).replace("l", "t").replace("l", "t")); //method chaining

// Array  (Data structure)

let student = ["aman", "ravi", "tanishq"];
let marks = [66, 33, 33, 55, 66, 77,];
let info = ["Tanishq", 25, 65.4]; // mixed array


let newArr = []; //empty array

console.log(info[0]); // Tanishq
console.log(info[0][0]); // T

// array are mutable
let fruits = ["mango", "apple", "guava", "pear"];
 fruits[0] = "banana"; // Used to replace the element at the first index while creating the 'fruits' array; 'Mango' was removed from the output.

fruits[10] = "pineapple"; //(11) ['banana', 'apple', 'guava', 'pear', empty × 6, 'pineapple']

// array method
let cars = ["audi", "maruti", "toyota", "xuv"];
// push -> to add to the end of an array

cars.push("Mahindra");
console.log(cars);

// Pop-> To delete the last variable
cars.pop("Mahindra");
console.log(cars);

// unshift -> To add to Start
cars.unshift("hundai");
console.log(cars);

// shift -> To delete from the beginning
cars.shift("hundai");
console.log(cars);

// practice Qs
// for the given start state of an array change it to final form using method 
// start -> ['january','july','march','august']
// final -> ['july','june','march','august']

let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);