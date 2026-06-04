// APNA COLLEGE
// JS (Part 9)
// Practice Questions
// Qsl. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.
// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.


// Answer no 1

let inputBox = document.createElement("input");
let button = document.createElement("button");
button.innerText = "click me";

document.querySelector("body").append(inputBox);
document.querySelector("body").append(button);

// Answer No 2
inputBox.placeholder = "username";
button.id = "btn";

// Answer no 3
let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";


// Answer no 4

let heading = document.createElement("h1");
heading.innerText =  "DOM Practice";
heading.style.textDecoration = "underline";
heading.style.color = "purple";

document.querySelector("body").append(heading);

// Answer no 5
let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";

document.querySelector("body").append(para);
