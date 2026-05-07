// arr.every(some function definition or name);
//It functions like the AND operator; if even a single value in the condition evaluates to False, the output will also be False.

let data = [1, 2, 3, 4].every((el) => (el % 2 == 0));// false

let data2 = [6, 2, 8, 4].every((el) => (el % 2 == 0));// true

console.log(data);
console.log(data2);
// Let's assume our tech company has developed a new VIP Club software. The security rule is that entry is granted only if all entrants are adults—that is, they are aged 18 or older.

// We have a dataset containing the ages of the users who have arrived:


// let userAges = [21, 25, 19, 17, 30];

// let isAllAdults = userAges.every((age) => (el >= 18));

// console.log(isAllAdults);


// some method

let userAges = [21, 25, 19, 17, 30];
let hasDiscount = userAges.some((age) => (age >= 30));

console.log(hasDiscount);