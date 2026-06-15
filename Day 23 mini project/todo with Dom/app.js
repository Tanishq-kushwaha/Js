const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const ul = document.querySelector("ul");

button.addEventListener("click", function(){
  let task = inputBox.value;
  let list = document.createElement("li");
  list.innerText = task;

  

  ul.appendChild(list);
  inputBox.value = "";
});