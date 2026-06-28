// async function greet() {
//     // throw "error";
//     return "hello";
// }


// greet().then((result) => {
//     console.log("fulfilled");
//     console.log("Result was:", result);
// })
//     .catch(() => {
//         console.log("some error");
//     });


// let demo = async () => {
//     return 5;
// }

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
   await getNum();
   await getNum();
   await getNum();
   await getNum();
       getNum();
}