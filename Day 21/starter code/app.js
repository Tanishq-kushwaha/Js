// Create an empty <div> and a <button>. On click of the button, change the background color of the <div> and insert some text into it using getElementById in JavaScript.
let myDiv = document.getElementById("specialDiv");
let actionButton = document.getElementById("specialButton");


actionButton.addEventListener("click", function(){

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

for(let i = 0; i < boxLinks.length; i++){

    boxLinks[i].style.backgroundColor = "yellow";
}