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

let h1 = document.querySelector("h1");
let body = document.querySelector("body")

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

async function demo() {
 await changeColor("violet", 1000);
  await changeColor("indigo", 1000);
  await changeColor("blue", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("orange", 1000);
   changeColor("red", 1000);
   demo();
}
demo();
// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("green color was completed");
//         return changeColor("pink", 1000);
//     })
//     .then(() => {
//         console.log("Pink color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color was completed");
//     })
//     .catch(() => {
//         console.log("syntax error");
//     });

    
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

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// saveToDb("Tanishq kushwaha", () => {
//     console.log("data1 is saved.");
//     saveToDb("Branch", () => {
//         console.log("data2 is saved");
//     }, () => {
//         console.log("data2 saving failed");
//     });
// }, () => {
//     console.log(" data1 saving failed.");
// });


// Promises

// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success : data saved");
//         } else {
//             reject("failure : week internet speed");
//         }
//     });
// }

// let request = saveToDb("tanishq kushwaha");

// request.then(() => {
//     console.log("Promise was resolved");
// })
//     .catch(() => {
//         console.log("Promise was rejected");
//     });


// promise chaining

// saveToDb("Tanishq").then((result) => {
//     console.log("Data1 is saved");
//     console.log("result: ",result);
//     return saveToDb("Hello world");
// })
//     .then((result) => {
//         console.log("Data2 is saved");
//         console.log("result: ",result);
//         return saveToDb("kushwaha");
//     })
//     .then((result) => {
//         console.log("Data3 is saved");
//         console.log("result: ",result);
//     })
//     .catch((error) => {
//         console.log("some promise rejected");
//         console.log("error: ",error);
// });
