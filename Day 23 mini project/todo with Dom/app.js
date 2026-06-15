const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const ul = document.querySelector("ul");

button.addEventListener("click", function(){
  let task = inputBox.value;
  let list = document.createElement("li");
  list.innerText = task;

  let dltBtn = document.createElement("button")
  dltBtn.innerText = "delete"; 
  dltBtn.classList.add("delete");
  list.appendChild(dltBtn);

  ul.appendChild(list);
  inputBox.value = "";
});