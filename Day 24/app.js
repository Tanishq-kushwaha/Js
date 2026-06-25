// call stack
// function hello(){
//     console.log("inside hello fnx");
//     console.log("Hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }
// console.log("calling demo fnx");
// demo();
// console.log("finished");

// visualizing the call stack

function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}
console.log("JS Loaded");
debugger;
three();

// callback hell

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("pink", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});