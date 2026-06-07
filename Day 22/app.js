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
}