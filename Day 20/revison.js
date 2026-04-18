// Q1 — forEach
// Ek array [10, 20, 30] hai. forEach use karke har number ka square console me print karo.


let arr = [10, 20, 30];

let square = arr.forEach((el) => {
    console.log(el * el);
});

console.log(square);



// Q2 — map
// ["hello", "world", "js"] — map use karke sabhi strings ko uppercase me convert karo.


let array = ["hello", "world", "js"];

let upper = array.map((str) => {
     return str.toUpperCase();
});

console.log(upper);


// Q3 — filter
// [5, 12, 3, 18, 7, 25] — sirf 10 se bade numbers ka array banao.


let numbers = [5, 12, 3, 18, 7, 25];
