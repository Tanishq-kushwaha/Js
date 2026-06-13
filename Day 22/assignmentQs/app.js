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




// - load

// [Use MDN for help]