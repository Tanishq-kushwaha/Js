// Create an empty <div> and a <button>. On click of the button, change the background color of the <div> and insert some text into it using getElementById in JavaScript.
let myDiv = document.getElementById("specialDiv");
let actionButton = document.getElementById("specialButton");


actionButton.addEventListener("click", function () {

    myDiv.innerText = "hello spider man";
    myDiv.style.backgroundColor = "aqua";

});

// let photo = document.getElementById("mainImg");

// let smallImgs = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i<smallImgs.length; i++){

//  smallImgs[i].src = "assets/spiderman_img.png";
// }


// Task
// Your index.html contains several links within a <div class="box"> with class="boxLink".

// Go back to your app.js. Using getElementsByClassName and a for loop, write code that:

// Selects all these links with the boxLink class.

// Changes the text color of each link to red or green while running the loop.

// Changes their background color to yellow.

// Code it and test it in a browser. If it's making you nervous, that's fine—growth always happens outside your comfort zone. Get to work.


let boxLinks = document.getElementsByClassName("boxLink");

for (let i = 0; i < boxLinks.length; i++) {
    boxLinks[i].style.color = "red";
    boxLinks[i].style.backgroundColor = "yellow";
}



// Task
// Your index.html has two paragraphs (<p>). One under the "About" heading and one under "Creation & Development."

// Go to your app.js and write this code without any mistakes:

// Use document.getElementsByTagName to store all these <p> tags in a variable.

// Run a for loop.

// Inside the loop, change the text color of each paragraph to purple or orange.

// Change their font weight (font-weight, written as fontWeight in JS) to "bold."

let para = document.getElementsByTagName("p");

for (let i = 0; i < para.length; i++) {
    para[i].style.color = "purple";
    para[i].style.fontWeight = "bold";
}

// Task
// Your index.html has two <h2> tags: "About" and "Creation & Development".

// Use document.querySelectorAll to select both <h2> tags into a variable. 

// Run a for loop.

// Inside the loop, change the text color of each <h2> to blue.

// Change their font size to "30px".

let headings = document.querySelectorAll("h2");
for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = "blue";
    headings[i].style.fontSize = "30px";
}



// Task

// You have a <p id="description"> at the bottom of your index.html, whose background color has already been changed.

// At the bottom of your app.js, complete this task:

// Select this #description paragraph using document.getElementById or querySelector.

// First, use console.log(description.innerText) and console.log(description.innerHTML) to see the difference in the browser console.

// Now, use innerHTML to replace the text of that entire paragraph and place a single word in the middle of the new text inside <i> (Italic) or <mark> (Highlight) tags (e.g., "I love coding in <mark>JavaScript</mark>")