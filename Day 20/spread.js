// Expends an iterable into multiple value 

// use or three dot ->(...)

// function func(...arr){
//     do something
// }

console.log(..."TanishqKushwaha");


let arr = ["karan", "shradaha", "vivek"];

console.log(...arr);




// Task:
// Tumhe Spread operator (...) ka use karke ek naya array banana hai jiska naam ho allStars. Us ek array ke andar dono teams ke naam aane chahiye, aur end mein usey console.log karke dikhana hai.


let techTeam = ["Rahul", "Aman"];
let salesTeam = ["Priya", "Neha"];

let allStars = [...techTeam, ...salesTeam];

console.log(...allStars);