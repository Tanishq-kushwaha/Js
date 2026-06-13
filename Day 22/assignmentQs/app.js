// Qs1. Try out the following events in Event Listener on your own :

// - mouseout
let div = document.querySelector(".container");


    div.style.backgroundColor = "red";
    div.style.width = "100px";
    div.style.height = "100px";


div.addEventListener("mouseout", function(){
    this.style.backgroundColor = "blue";
    this.style.width = "100px";
    this.style.height = "100px";
});

// - keypress

document.addEventListener("keypress", function(){
  console.log("Key pressed");
});


document.addEventListener("keydown", function(){
  console.log("Key down");
});

// - Scroll

window.addEventListener("scroll", function(){
 console.log(window.scrollY);
});

// - load

window.addEventListener("load", function(event) {
     console.log(event);
 })

// [Use MDN for help]


// Qs2. The Prompt:
// Create a button on the page using JavaScript. Add an event listener to the button that changes the button’s color to green when it is clicked.

let btn = document.createElement("button");
btn.innerText = "green";
document.body.appendChild(btn);


btn.addEventListener("click", function(){
  this.style.backgroundColor = this.innerText;
});