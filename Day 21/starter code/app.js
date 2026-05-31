// Create an empty <div> and a <button>. On click of the button, change the background color of the <div> and insert some text into it using getElementById in JavaScript.
let myDiv = document.getElementById("specialDiv");


let actionButton = document.getElementById("specialButton");// for selecting button 
let targetBox = document.querySelector(".box");// for selecting box

actionButton.addEventListener("click", function () {

    targetBox.classList.toggle("darkModeBox");
    //Usage of .toggle(): This will add and remove the 'darkModeBox' class on every click.




    // Usage of .contains(): We will check whether Dark Mode is on or off,
    // // and update the button's text (.innerText) accordingly!        
    if (targetBox.classList.contains("darkModeBox")) {

        actionButton.innerText = "Light mode on";
    } else {
        actionButton.innerText = "dark mode on ";
    }
});






// actionButton.addEventListener("click", function () {

//     myDiv.innerText = "hello spider man";
//     myDiv.style.backgroundColor = "aqua";

// });


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


let paragraph = document.querySelector("#description");

console.log(`This is innerText----> ${paragraph.innerText}`);

console.log(`This is innerHtml----> ${paragraph.innerHTML}`);



// changes in text 
document.querySelector("#description").innerHTML = "i love coding in <i>javaScript</i>";




// changed text 
console.log(`This is innerText----> ${paragraph.innerText}`);

console.log(`This is innerHtml----> ${paragraph.innerHTML}`);




// Task 
// Use document.querySelector to select your #mainImg (Spider-Man's photo).

// Find its current src using getAttribute and print it to the console.

// Then use setAttribute to change the src of the image to "https://dummyimage.com/400x400/000/fff&text=Venom+Image" (so that another dummy image appears in place of Spider-Man's).

// Select the first <a class="boxLink"> in your HTML and use setAttribute to set its src to "https://www.google.com".

let spyderManImg = document.querySelector("#mainImg");

console.log(spyderManImg.getAttribute("src")); // for print source in console 

spyderManImg.setAttribute("src", "https://dummyimage.com/400x400/000/fff&text=Venom+Image"); // for changing the source link of image 

spyderManImg.setAttribute("class", "big");// for changing class


// hasAttribute()

// for check attribute is exists
// return a boolean value True or False
console.log(spyderManImg.hasAttribute("src"));//true
console.log(spyderManImg.hasAttribute("title"));//false


let old = document.querySelector(".oldImg");

old.setAttribute("width", "5000");// dont work beacause CSS over write this 


// working on button


let btn = document.querySelector("#btn");



btn.addEventListener("click", function () {
    btn.classList.toggle("darkModeBtn");
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "click for Light";
    } else {
        btn.innerText = "Click for power cut";
    }
});




// Our HTML contains a <div class="images"> containing three Spider-Man creation images. We'll capture the middle image and style its relatives using navigation.

let centerImg = document.querySelectorAll(".oldImg")[1];


centerImg.parentElement.style.backgroundColor = "black"; // for black BG.


centerImg.previousElementSibling.style.opacity = "0.3";// for changing opacity 

centerImg.nextElementSibling.style.opacity = "0.3";//  for changing opacity 

centerImg.style.boxShadow = "0px 0px 20px blue" // for shadow




// The Challenge: "Secret Info Reveal"
// Your index.html contains a <div class="box">. Inside this box is a <h4> (containing "Publication Info") and a <ul> list. You have to play with these.

// Your Steps (Logic Only):

// Step 1: In your app.js, first select that <div class="box"> and store it in a variable. (This is your starting point).

// Step 2: Now use the children property on that box variable. You know that children returns an array. Target the first child in that list (which is the <h4> tag).

// Step 3: Change the innerText of that <h4> tag to "Spider-Man Secret Info" and change its background color to "red" and text color to "white".

// Step 4: Now listen carefully! Don't query the box again. Use nextElementSibling on your <h4> tag code so you can reach the tag directly below it (i.e., the <ul> list).

// Step 5: Reach that <ul> tag, add a border to it (e.g., "2px dashed black") and change its background color to "lightgreen".

let infoBox = document.querySelector(".box");

infoBox.children[0].innerText = "Spider-Man Secret Info";

infoBox.children[0].style.backgroundColor = "red";
infoBox.children[0].style.color = "white";


infoBox.children[0].nextElementSibling.style.border = "2px dashed black";

infoBox.children[0].nextElementSibling.style.backgroundColor = "lightgreen";