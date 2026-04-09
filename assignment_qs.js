// write an arrow function named arrayAverage that accept an array of numbers and returns the average of those no.

arr = [10, 20, 30];

array = [55, 44, 65, 777, 88, 22, 88, 66];

const arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // sum ki value update kiya 
    }
    return sum / arr.length;
};

console.log(arrayAverage(array));


// write an arrow function named isEven() that takes a single number as argument and return if is even or not.

let num = 25;  // 8, 4 any no.
const isEven = (num) => {
    if ((num % 2) == 0) {
        return true;
    } else {
        return false;
    }
};

isEven(40);