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

// object spread

let basicInfo = {
    name: "Tanishq",
    role: "Developer"
};
let contactInfo = { 
    email: "tanishq@company.com",
    phone: "9876543210" 
};

// Mujhe Spread operator (...) ka use karke ek naya object {} banakar dikhao jiska naam ho completeProfile. Is ek object ke andar basicInfo aur contactInfo dono ka data merge hona chahiye. End mein usey console.log karo.

let completeProfile = {
   ...basicInfo,
   ...contactInfo
};

console.log(completeProfile);