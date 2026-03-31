// // Q1. Template Literals
// Yeh 2 variables hain:
// let item = "Pizza";
// let price = 150;
// Template literal use karke print karo:
// "Item: Pizza, Price: 150 rupees"
let item = "Pizza";
let price = 150;
console.log(`${item + price} rupees`)

//  Q2. Arithmetic Operators
// let a = 20;
// let b = 6;
// Alag alag console.log mein print karo: a+b, a-b, a*b, a%b, a**b
let a = 20;
let b = 6;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a % b); // modulo
console.log(a ** b); // power operator

// Q3. Comparison — Predict the Output
// Pehle socho kya aayega, phir run karo:
console.log(10 > 5); // true
console.log(10 === "10"); // false
console.log(10 == "10"); //true
console.log(7 !== 7); // false

// Q4. if Statement
// let temperature = 42;
// Agar temperature 40 se zyada ho toh print karo: "It's too hot!"
let temperature = 42;
if (temperature > 40) {
    console.log("It's too hot!");
}
else {
    console.log("Its normal");
}

// Q5. String — trim & toUpperCase
// let city = "   mumbai   ";
// Trim karo aur uppercase mein print karo: "MUMBAI"
let city = "   mumbai   ";
console.log(city.trim().toUpperCase());

// Q6. Array Basics
// let fruits = ["mango", "apple", "banana", "grape", "litchi"];
// Print karo:

// Pehla fruit
// Teesra fruit
// Array ki total length

let fruits = ["mango", "apple", "banana", "grape", "litchi"];
console.log(fruits[0]); // first fruit
console.log(fruits[2]); // teesra fruit
console.log(fruits.length); // length

// Q7. if-else — Voting
// let age = 17;

// 18+ → "You can vote"
// 18 se kam → "You cannot vote"
let age = 17;
if (age >= 18) {
    console.log("You can vote");
}
else {
    console.log("You cannot vote");
}

// else-if — Grade System
// let marks = 45;

// 80+ → "A+"
// 60-79 → "A"
// 33-59 → "B"
// 33 se kam → "F"
let marks = 45;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else {
    console.log("F");
}

// Logical AND (&&)
// let num = 35;
// Check karo: num 10 se bada aur 50 se chhota ho

// Dono sahi → "Number is in range"
// Warna → "Out of range"
let num = 35;
if (num > 10 && num < 50) {
    console.log("Number is in range");
}
else {
    console.log("Out of range");
}

// Q10. Logical OR (||)
// let color = "black";
// Agar color "red" ya "black" ho → "Dark color"
// Warna → "Light color"

let color = "black";
if (color === "red" || color === "black") {
    console.log("Dark color");
}
else {
    console.log("Light color");
}

// Q11. Switch — Traffic Light
// let signal = "green";

// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"
// default → "Broken light"
let signal = "green";
switch (signal) {
    case "green":
        console.log("Go");
        break;
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    default:
        console.log("Broken light");

}

// Q12. String — indexOf & slice
// let str = "I Love Coding";

// "Love" ka index nikalo
// Index 7 se aage ka part slice karo → "Coding"
let str = "I Love Coding";
console.log(str.indexOf("Love"));
console.log(str.slice(7));

// Q13. String — replace & repeat
// let str = "I love Coding";

// "love" ko "enjoy" se replace karo
// "Ha" ko 4 baar repeat karo

console.log(str.replace("Love", "enjoy"));
let ver = "Ha";
console.log(ver.repeat(4));

// Q14. Array Methods — push, pop, unshift, shift
// let cars = ["audi", "bmw", "maruti"];

// "toyota" end mein add karo
// Start se ek item hata do (aur print karo kya hata)
// "ferrari" beginning mein add karo
// Final array print karo
let cars = ["audi", "bmw", "maruti"];
cars.push("toyota");
cars.shift();
console.log(cars);
cars.unshift("ferrari");
console.log(cars);

//  Q15. Array — includes & indexOf
// let languages = ["HTML", "CSS", "JavaScript", "Python"];

// "CSS" included hai? (true/false print karo)

let languages = ["HTML", "CSS", "JavaScript", "Python"];
if (languages.indexOf("CSS") === -1) {
    console.log("False");
}
else {
    console.log("True");
}
// "JavaScript" ka index kya hai?
console.log(languages.indexOf("JavaScript"));
// "Java" included hai?

if (languages.indexOf("Java") === -1) {
    console.log("Java nahi hai");
}
else {
    console.log("Java hai");
}





// programming is not a measure of your raw IQ; it is a testament to your
//  mental resilience and emotional intelligence....... Tanishq kushwaha 




// Q16. Popcorn Price System
// let size = "M"; // XL=250, L=200, M=100, S=50
// Sahi price console mein print karo using if-else if.

let size = "M";
if (size === "XL") {
    console.log("prise is 250");
}
else if (size === "L") {
    console.log("prise is 200");
}
else if (size === "M") {
    console.log("prise is 100");
}
else {
    console.log("prise is 50");
}

// Q17. ATM Machine
// let balance = 5000;
// let withdraw = 2000;

// withdraw > 0 && withdraw <= balance → "Success. Remaining: ₹XXXX"
// withdraw > balance → "Insufficient balance"
// withdraw <= 0 → "Invalid amount"
let balance = 5000;
let withdraw = 2000;
if (withdraw > 0 && withdraw <= balance) {
    console.log(`Success. Remaining: ${balance - withdraw}`);
}
else if (withdraw > balance) {
    console.log("Insufficient balance");
}
else if (withdraw <= 0) {
    console.log("Invalid amount");
}
else {
    console.log("System Error try again")
}


// Q18. Shopping Cart
// let cart = ["apple", "bread", "milk", "eggs"];

// "butter" end mein add karo
// "bread" ka index nikalo, phir usse "cheese" se replace karo (splice use karo)
// Final cart print karo
let cart = ["apple", "bread", "milk", "eggs"];

cart.push("butter"); //butter ko add kiya 

console.log(cart.indexOf("bread"));

cart.splice(1, 1, "cheese");// kar diya replace

console.log(cart);

// 19. Password Checker
// let password = "Hello@123";
// Check karo (&& use karo):

// password.length > 8
// password.includes("@")

// Dono sahi → "Strong password"
// Warna → "Weak password"
let password = "Hello@123";
if (password.length > 8 && password.includes("@")) {
    console.log("Strong password");
}
else {
    console.log("Weak Password");
}

// Q20. Marks Sorter
// let scores = [45, 12, 89, 34, 67, 23, 99, 56];

// Ascending order mein sort karo (chote se bade) → scores.sort((a,b) => a-b)
// Descending order mein sort karo (bade se chote) → scores.sort((a,b) => b-a)
// Dono print karo

let scores = [45, 12, 89, 34, 67, 23, 99, 56];
console.log(scores.sort((a, b) => a - b));
console.log(scores.sort((a, b) => b - a));


// test khtam ab muzko batao meri galtiyan or review do
