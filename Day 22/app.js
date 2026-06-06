// Create a button that, when clicked, changes the text of the web page's heading (<h1>).

let btn = document.createElement("button");
btn.innerText = "Click me!";
document.querySelector("body").append(btn);