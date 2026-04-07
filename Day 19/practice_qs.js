// write an arrow function that returns the square of a number 'n'


const square = (n) => n * n;
console.log(square(5));


// write a function that prints " hello world" 5 times at interval of 2s each.

let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setInterval(() => {
    clearInterval(id)
    console.log("khatm");
}, 10000);