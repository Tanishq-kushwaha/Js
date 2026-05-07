//reduce the array to a single value

// arr.reduce(reducer function with 2 variables for (accumulator, element);

let sum = [1, 2, 3, 4].reduce((res, el) => (res + el));

console.log(sum); // sum of all element 



// Here is the data for our last 4 sales today:

let dailySales = [1000, 2500, 3000, 1500];


// Write a piece of code using the `reduce` method that sums up all these sales figures.
// Store the result in a variable named `totalRevenue` and `console.log` it at the end. The output should be exactly 8000.

// let sales = dailySales.reduce((total, sale) => {
//     return total + sale;
// }, 0);

// console.log(sales);

let sales = dailySales.reduce((total, sale) => (total + sale));

console.log(sales);