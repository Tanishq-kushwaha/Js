// map_and_filter

// let newArr = Array.map(some function definition or name )

let num = [1, 2, 3, 4];
let double = num.map(function (el) {
    return el * 2;
});

console.log(double);


// square of numbers in an array by using map function

let numbers = [2, 4, 6];

let result = numbers.map((el) => {
    return el * el;
});

console.log(result);
// Suppose you are the Lead Developer at my tech company. We have data on the current salaries of our top employees:

let salaries = [50000, 80000, 120000];
// The company has generated a good profit, and as a strategist, I have decided that we will give a 10% bonus to everyone.

// You need to generate a new array using the `map` method, in which a 10% increment has been added to every employee's salary.

let updatedSalaries = salaries.map((salary) => {
    return (salary * 1.1);
});
console.log(updatedSalaries);



// let newArr = arr.filter(some function definition and name );

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let even = nums.filter((num) => {
    return (num % 2 == 0);
});

console.log(even);

// Maan lo meri ek badi e-commerce company hai, aur humare paas products ke prices  ki ek list hai:

// let prices = [150, 400, 800, 50, 1200];

// As a billionaire strategist, main chahti hoon ki hum apna marketing budget sirf apne Premium Products par lagayein. Premium products wo hain jinka price 500 ya usse zyada hai.


// let premiumProducts = prices.filter((price) => {
//     return (price >= 500);
// });

// console.log(premiumProducts);


// Method Chaining

let prices = [150, 400, 800, 50, 1200];

let saleProduct = prices.filter((price) => {
    return (price >= 500);
}).map((price) => {
    return (price * 0.9);
});

console.log(saleProduct);