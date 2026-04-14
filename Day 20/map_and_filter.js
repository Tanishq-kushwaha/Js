// map_and_filter

// let newArr = Array.map(some function deffinition or name )

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

// Maan lo tum meri tech company ke lead developer ho. Humare paas humare top employees  ki current salaries  ka ek data hai:

let salaries = [50000, 80000, 120000];

// Company ne acha profit banaya hai aur maine as a strategist decide kiya hai ki hum in sabko 10% bonus denge.

// Tumhe map method ka use karke ek naya array  generate  karna hai, jisme har employee ki salary mein 10% ka increment  add ho gaya ho.


let updatedSalaries = salaries.map((salary) => {
    return (salary * 1.1);
});
console.log(updatedSalaries);
