// Q1 — forEach
//There is an array [10, 20, 30]. Use foreach to print the square of each number to the console.

let arr = [10, 20, 30];

let square = arr.forEach((el) => {
    console.log(el * el);
});

console.log(square);



// Q2 — map
// ["hello", "world", "js"] — Convert all strings to uppercase using map.


let array = ["hello", "world", "js"];

let upper = array.map((str) => {
    return str.toUpperCase();
});

console.log(upper);


// Q3 — filter
// [5, 12, 3, 18, 7, 25] — Create an array of numbers greater than 10 only.


let numbers = [5, 12, 3, 18, 7, 25];

let grater = numbers.filter((num) => {
    return (num >= 10);
});
console.log(grater);

// Q4 — some
// ["cat", "dog", "elephant"] — Check if a string is more than 5 characters long.


let animals = ["cat", "dog", "elephant"];
let char = animals.some((el) => {
    return el.length > 5;
});

console.log(char);


// Q5 — every
// [2, 4, 6, 8, 10] — Check that all the numbers are even.

let number1 = [2, 4, 6, 8, 10];
let value = number1.every((num) => {
    return num % 2 == 0;
});

console.log(value);


// The array below contains products. Extract the names of only the available products and convert them to uppercase. (Filter + Map chain)

let products = [{ name: "pen", available: true },
{ name: "book", available: false },
{ name: "bag", available: true }];

// let stock = products.filter((item) => {
//     return item.available;
// }).map((item) => {
//    return item.name.toUpperCase();
// });

// console.log(stock);


let stock = products.filter(item => item.available).map(item => item.name.toUpperCase());

console.log(stock);



// [18, 21, 15, 30] — dono batao: kya koi 18 se chota hai? Kya sab 18+ hain?

let ages = [18, 21, 15, 30];
let adult = ages.every(age => age >= 18);
console.log("kya sab 18+ hai", adult);
let minor = ages.some(age => age < 18);
console.log("kya koi minor hai", minor);


