// arr.every(some function definition or name);
// AND operator ki tarah kaam karta hai agar condition ke hissab se ik bhi value false hui to output bhi false hi ayega.

let data = [1, 2, 3, 4].every((el) => (el % 2 == 0));// false

let data2 = [6, 2, 8, 4].every((el) => (el % 2 == 0));// true

console.log(data);
console.log(data2);

// Maan lo humari tech company ne ek naya VIP Club software banaya hai. Security rule yeh hai ki isme entry tabhi milegi jab aane wale saare log adult hon, yaani unki age 18 ya usse zyada ho.

// Humare paas aaye hue users ki ages ka ek data hai:


let userAges = [21, 25, 19, 17, 30];

let isAllAdults = userAges.every((age) => (el >= 18));

console.log(isAllAdults);