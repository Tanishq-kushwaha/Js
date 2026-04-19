// Q1 — forEach
// Ek array [10, 20, 30] hai. forEach use karke har number ka square console me print karo.


let arr = [10, 20, 30];

let square = arr.forEach((el) => {
    console.log(el * el);
});

console.log(square);



// Q2 — map
// ["hello", "world", "js"] — map use karke sabhi strings ko uppercase me convert karo.


let array = ["hello", "world", "js"];

let upper = array.map((str) => {
    return str.toUpperCase();
});

console.log(upper);


// Q3 — filter
// [5, 12, 3, 18, 7, 25] — sirf 10 se bade numbers ka array banao.


let numbers = [5, 12, 3, 18, 7, 25];

let grater = numbers.filter((num) => {
    return (num >= 10);
});
console.log(grater);

// Q4 — some
// ["cat", "dog", "elephant"] — check karo ki koi string 5 se zyada characters ki hai.


let animals = ["cat", "dog", "elephant"];
let char = animals.some((el) => {
    return el.length > 5;
});

console.log(char);


// Q5 — every
// [2, 4, 6, 8, 10] — check karo ki saare numbers even hain.

let number1 = [2, 4, 6, 8, 10];
let value = number1.every((num) => {
    return num % 2 == 0;
});

console.log(value);


// Neeche diye array me products hain. Sirf available products ka naam nikalo aur uppercase karo. (filter + map chain)

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


