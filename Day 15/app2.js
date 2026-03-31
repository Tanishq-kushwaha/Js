// Replace method
let str = "Ilovecoding";
//  love ko do se replace kar diya 
str.replace("love", "do");
// o ko x se replace kar diya lekin sirf pehla o hi change hoga.
str.replace("o", "x");


// repeat method
let str1 = "papa ji";
str1.repeat(3); // papa ji 3 bar repeat karaya

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
fruits[0] = "banana"; // fruits array banate time first index pr replace karne ke liye use kiya output se mango  hatt gya

fruits[10] = "pineapple"; //(11) ['banana', 'apple', 'guava', 'pear', empty × 6, 'pineapple']

// array method
let cars = ["audi", "maruti", "toyota", "xuv"];
// push-> kisi array ke last me jodne ke liye

cars.push("Mahindra");
console.log(cars);

// Pop-> last waley variable ko dlt karne ke liye
cars.pop("Mahindra");
console.log(cars);

// unshift -> statrt me add karne ke liye 
cars.unshift("hundai");
console.log(cars);

// shift -> start se dlt karne ke liye 
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