// Create a button that, when clicked, changes the text of the web page's heading (<h1>).

let btn = document.createElement("button");
btn.innerText = "Click me!";
document.querySelector("body").append(btn);

btn.onclick = function(){
    document.querySelector("h1").innerText =  "Button was clicked";
}
// Task 2: Create a button that changes the background color of the webpage when clicked.

let btn2 = document.createElement("button");
