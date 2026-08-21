// // Q1. Template Literals
//Here are 2 variables:
// let item = "Pizza";
//let price = 150;
//print using template literal:
// "Item: Pizza, Price: 150 rupees"
let item = "Pizza";
let price = 150;
console.log(`${item + price} rupees`)

// Q2. Arithmetic Operators
// let a = 20;
// let b = 6;
// Separate console.log by printing: a+b, a-b, a*b, a%b, a**b
let a = 20;
let b = 6;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a % b); // modulo
console.log(a ** b); // power operator

// Q3. Comparisons — Predict the output
// Think about the result first, then run it:
console.log(10 > 5); // true
console.log(10 === "10"); // false
console.log(10 == "10"); //true
console.log(7 !== 7); // false

// Q4. If statement
// let temperature = 42;
// If the temperature is greater than 40, print: "It's too hot!"
let temperature = 42;
if (temperature > 40) {
    console.log("It's too hot!");
}
else {
    console.log("Its normal");
}

// Q5. String — Trim & ToUpperCase
// let city = "   Mumbai   ";
// Trim and print in uppercase: "MUMBAI"
let city = "   mumbai   ";
console.log(city.trim().toUpperCase());

// Q6. Array Basics
// let fruits = ["Mango", "Apple", "Banana", "Grape", "Lychee"];
// Print:

// First fruit
// Third fruit
// Total length of the array

let fruits = ["mango", "apple", "banana", "grape", "litchi"];
console.log(fruits[0]); // first fruit
console.log(fruits[2]); // third fruit
console.log(fruits.length); // length

// Q7. if-else — Voting
// let age = 17;

// 18+ → "You can vote"
// less then 18 → "You cannot vote"
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
// Check: num is greater than 10 and less than 50

// Both true → "Number is in range"
// Otherwise → "Out of range"
let num = 35;
if (num > 10 && num < 50) {
    console.log("Number is in range");
}
else {
    console.log("Out of range");
}

// Q10. Logical OR (||)
// let color = "black";
// If color is "red" or "black" → "Dark color"
// Color → "Light color"

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

// find index of "Love" 
// Slice the part from index 7 onwards → "Coding"
let str = "I Love Coding";
console.log(str.indexOf("Love"));
console.log(str.slice(7));

// Q13. String — replace & repeat
// let str = "I love Coding";

// Replace "Love" with "Enjoy"
// Repeat "Ha" 4 times

console.log(str.replace("Love", "enjoy"));
let ver = "Ha";
console.log(ver.repeat(4));

// Q14. Array Methods — push, pop, unshift, shift
// let cars = ["audi", "bmw", "maruti"];

// Add "Toyota" at the end
// Remove one item from the start (and print the result)
// Add "Ferrari" at the beginning
// Print the final array
let cars = ["audi", "bmw", "maruti"];
cars.push("toyota");
cars.shift();
console.log(cars);
cars.unshift("ferrari");
console.log(cars);

//  Q15. Array — includes & indexOf
// let languages = ["HTML", "CSS", "JavaScript", "Python"];

// Is "CSS" included? (Print True/False)

let languages = ["HTML", "CSS", "JavaScript", "Python"];
if (languages.indexOf("CSS") === -1) {
    console.log("False");
}
else {
    console.log("True");
}
// What is the index of "JavaScript"?
console.log(languages.indexOf("JavaScript"));
// is "java" included?

if (languages.indexOf("Java") === -1) {
    console.log("It is not Java.");
}
else {
    console.log("it is Java");
}





// programming is not a measure of your raw IQ; it is a testament to your
//  mental resilience and emotional intelligence. 
//                                                Tanishq kushwaha.




// Q16. Popcorn Price System
// let size = "M"; // XL=250, L=200, M=100, S=50
// Print the correct price to the console using if-else statements.

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

// Add "Butter" at the end
// Find the index of "Bread", then replace it with "Cheese" (use splice)
// Print the final cart
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

// Both are correct. → "Strong password"
// Otherwise → "Weak password"
let password = "Hello@123";
if (password.length > 8 && password.includes("@")) {
    console.log("Strong password");
}
else {
    console.log("Weak Password");
}

// Q20. Marks Sorter
// let scores = [45, 12, 89, 34, 67, 23, 99, 56];

// Sort in ascending order (smallest to largest) → scores.sort((a,b) => a-b)
// Sort in descending order (largest to smallest) → scores.sort((a,b) => b-a)
// Print both

let scores = [45, 12, 89, 34, 67, 23, 99, 56];
console.log(scores.sort((a, b) => a - b));
console.log(scores.sort((a, b) => b - a));


// The test is over; now tell me my mistakes and give me a review.
