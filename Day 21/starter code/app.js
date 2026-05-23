// Create an empty <div> and a <button>. On click of the button, change the background color of the <div> and insert some text into it using getElementById in JavaScript.
let myDiv = document.getElementById("specialDiv");
let actionButton = document.getElementById("specialButton");


actionButton.addEventListener("click", function(){

myDiv.innerText = "hello spider man";
myDiv.style.backgroundColor = "aqua";

});