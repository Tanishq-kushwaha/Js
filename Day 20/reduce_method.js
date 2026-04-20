//reduce the array to a single value

// arr.reduce(reducer function with 2 variables for (accumulator, element);

let sum = [1, 2, 3, 4].reduce((res, el) => (res + el));

console.log(sum); // sum of all element 




// Humari aaj ki aakhri 4 sales ka data yeh hai:

let dailySales = [1000, 2500, 3000, 1500];

// Mujhe reduce method ka use karke ek code likh kar dikhao jo in saari sales ko jod de.
// Is result ko ek variable totalRevenue mein store karo aur end mein usey console.log karo. Jiska output exact 8000 aana chahiye.


// let sales = dailySales.reduce((total, sale) => {
//     return total + sale;
// }, 0);

// console.log(sales);

let sales = dailySales.reduce((total, sale) => (total + sale));

console.log(sales);