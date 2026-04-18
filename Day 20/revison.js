// Q1 — forEach
// Ek array [10, 20, 30] hai. forEach use karke har number ka square console me print karo.


let arr = [10, 20, 30];

let square = arr.forEach((el) => {
    console.log(el * el);
});
console.log(square);