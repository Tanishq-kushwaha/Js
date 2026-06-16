const button = document.querySelector("button");
const inputBox = document.querySelector("input");
const ul = document.querySelector("ul");

button.addEventListener("click", function () {
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


ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
