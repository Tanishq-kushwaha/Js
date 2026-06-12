// Create a button that, when clicked, changes the text of the web page's heading (<h1>).

let btn = document.createElement("button");
btn.innerText = "Click me!";
document.querySelector("body").append(btn);

btn.onclick = function(){
    document.querySelector("h1").innerText =  "Button was clicked";
};
// Task 2: Create a button that changes the background color of the webpage when clicked.

let btn2 = document.createElement("button");
btn2.innerText = "Click for change BG color";
document.querySelector("body").append(btn2);

btn2.onclick = function(){
    document.querySelector("body").style.backgroundColor = "red";
};
// Task 3: Create a paragraph <p> that starts with 0. Then create a button that, when clicked, increments the number by 1.

let para = document.createElement("p");
para.innerText = "0";
document.querySelector("body").append(para);

let btn3 = document.createElement("button");
btn3.innerText = "Click me and count.";
document.querySelector("body").append(btn3);

let count = 0;
btn3.onclick = function(){
    count++; 
    // console.log(count);
    para.innerText = count;
};

// Task 4 (Hover Magic): Create a <div> element (without a CSS file, you can style it with JS) with a width and height of 200px and a background color of red. When the user moves their mouse inside the box (onmouseenter), its background color should change to yellow.

let box = document.querySelector("div");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "red";


box.onmouseenter = function (){
    box.style.backgroundColor = "Yellow";
};


// Task 5 (Hover & Leave): Add another event to your code above—onmouseleave. When the user moves their mouse out of the box, its background color should return to red.

box.onmouseleave = function(){
    box.style.backgroundColor = "red";
    console.log("Enter in div");
    this.style.borderRadius = "50%";
}

// Task 6 (Character Counter): > 
// 1. Create an <input> field where the user can type their name.
// 2. Create a <p> tag that initially displays "Characters: 0".
// 3. Using the onkeyup event, the total character length within the paragraph should be updated as soon as the user types something in the input field and releases the key.

let paragraph = document.querySelector("#para1");
let input = document.querySelector("input");


input.onkeyup = function(){
    paragraph.innerText =  "Characters: " + input.value.length;
}

let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
 console.log("Heading was clicked");
});




// Task 8: Create a button that initially displays "0". Create an `onclick` function using the `this` keyword so that whenever the button is clicked, its text increments by 1 (acting like a counter, but without using a separate count variable—directly using `this.innerText`).


let button = document.querySelector("#count");

button.onclick = function(){
    this.innerText = Number(this.innerText)+1;
}

// Task 9 (The Modern Way):
// Create a new button.
// Attach a "click" event to it using the modern `addEventListener`.
// When the user clicks it, an `alert("Modern JS Mastered!")` popup should appear on the screen.

let alertBtn = document.querySelector(".alertBtn");

alertBtn.addEventListener("click", function(){
   alert("Modern JS Mastered!");
});


// Task 8.2 (The Toggle Box):

// Create a `<div>` in HTML containing some initial text, such as "Click to Highlight".

// Attach a "click" event listener to it.

// Inside the function, use only the `this` keyword to change the box's background color to green and the text color to white.


let dabba = document.querySelector("#dabba");

dabba.addEventListener("click", function(){
       this.style.width = "200px" ;
       this.style.height = "200px" ;
       this.style.backgroundColor = "green";
       this.style.color = "white";
});



// Task 8.3 (The Multi-Color Buttons 🎮):

// Create 3 separate buttons in HTML, each labeled with a different color name—for example, "Red" for the first, "Blue" for the second, and "Green" for the third. Assign a common class to all three buttons, such as `class="colorBtn"`.

// Use `querySelectorAll(".colorBtn")` in JavaScript to select all these buttons at once.

// Run a `for...of` loop to attach an `addEventListener` to every button in that collection.

// Inside the function, use the `this` keyword to implement logic so that whenever a button is clicked, its background color changes to match its `innerText`! >)

let colorBtns = document.querySelectorAll(".colorBtn");

for(let btn of colorBtns){
 btn.addEventListener("click", function(){
   this.style.backgroundColor  = this.innerText;
 });   
}

