// return keyword is used to return some value from the function.

function isAdult(age) {
    if (age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(13));


// return function ke andar use hota hai
// kisi valu ke ke function ko bahar bhejta hai
// function ko wahin stop bhi kar deta hai


// practice Qs 
// create a function that return the sum of numbers from 1 to n

function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

getSum(100);


// practice qs
// create a function that return that concatenation of all strings in an array
let str = ["hello", "namaste", "radhe-radhe", "ram-ram", "!"];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result = result + str[i]; // result += str[i];
    }
     return result;
}