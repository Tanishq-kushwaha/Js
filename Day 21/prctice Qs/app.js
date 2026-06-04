// Practice Qs 
// Add the following elements to the container using only JavaScript and the DOM methods.
//  i) a <p> with red text that says "Hey I'm red!" 
// ii) an <h3> with blue text that says "I'm a blue h3!" 
// iii) a <div> with a black border and pink background color with the following elements inside of it:
//  another <h1> that says "I'm in a div"
//  a <p> that says "ME TOO!" 

let para = document.createElement("p");
para.innerText = "Hey I'm red!";
para.style.color = "red";                    
document.querySelector("body").append(para);                    


let head3 = document.createElement("h3");
head3.innerText = "I'm a blue h3!";
head3.style.color = "blue";
document.querySelector("body").append(head3);

let box = document.querySelector("div");
box.style.border = "2px solid black";