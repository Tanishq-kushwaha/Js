// map_and_filter

// let newArr = Array.map(some function deffinition or name )

let num = [1, 2, 3, 4];
let double = num.map(function (el) {
    return el * 2;
});

console.log(double);




let numbers = [2, 4, 6];

let result = numbers.map((el) => {
    return el * el;
});

console.log(result);