// // call stack
// // function hello(){
// //     console.log("inside hello fnx");
// //     console.log("Hello");
// // }

// // function demo(){
// //     console.log("calling hello fnx");
// //     hello();
// // }
// // console.log("calling demo fnx");
// // demo();
// // console.log("finished");

// // visualizing the call stack

// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// console.log("JS Loaded");
// debugger;
// three();

// // callback hell

// let h1 = document.querySelector("h1");
// let body = document.querySelector("body")

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         // body.style.backgroundColor = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }
// function repeat() {
//     changeColor("red", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("pink", 1000, () => {
//                     changeColor("blue", 1000, repeat);

//                 });
//             });
//         });
//     });
// }
// repeat();



// function bgColorChange(color, delay, nextColor) {
//     setTimeout(() => {
//         body.style.backgroundColor = color;
//         if (nextColor) nextColor();
//     }, delay);
// }

// function flow() {
//     bgColorChange("blue", 100, () => {
//         bgColorChange("red", 100, () => {
//              bgColorChange("lime", 100, flow )
//         });
//     });
// }
// flow();

function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDb("Tanishq kushwaha", () => {
    console.log("data1 is saved.");
    saveToDb("Branch", () => {
        console.log("data2 is saved");
    }, () => {
        console.log("data2 saving failed");
    });
}, () => {
    console.log(" data1 saving failed.");
});

