const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const ul = document.querySelector("ul");

button.addEventListener("click", function(){
  let task = inputBox.value;
  let item = document.createElement("li");
  item.innerText = task;

  let dltBtn = document.createElement("button");
  dltBtn.innerText = "delete"; 
  dltBtn.classList.add("delete");
  item.appendChild(dltBtn);

  ul.appendChild(item);
  inputBox.value = "";
 
});

let dltBtns = document.querySelectorAll(".delete");

for(let dtlBtn of dltBtns){
    dltBtn.addEventListener("click", function(){
        let par = dltBtn.parentElement;
        par.remove();
    });
}
 
