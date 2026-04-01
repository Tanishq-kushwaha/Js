// scope determines the "accessibility" of variable objects, and function from different parts of the code

// block scope
// variable declared inside a {} block aur iska access bahar nahi le sakte hai
{
    let a = 25;
}
// console.log(a); //error

// lexical scope
// Ek function apne andar banaye gaye variables ko toh use kar hi sakta hai, par wo apne se bahar banaye gaye variables ko bhi access kar sakta hai. Lekin, bahar wala code andar ke variables ko nahi dekh sakta.

function outerFunc(){
    let x = 5;
    let y = 6;
     function innerFunc(){
        console.log(x);
     }
     innerFunc(); // isko hatya to 5 print nahi hoga 
}
outerFunc(); // isko hatya to outer function nahi chlega aur inner function bhi nahi chlega 


// practice qs
// what will be the output?

let greet = "hello";  // global scope
function changeGreet(){
    let greet = "namaste";  // function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet) // lexical scope
    }
}
console.log(greet);
changeGreet();
