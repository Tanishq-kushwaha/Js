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
   await  getNum();
   
  let a = 5;
  console.log(a); 
}


// async function demo() {
//     try{
//    await getNum();
//    await getNum();
//    throw "error";
//    await getNum();
//    await getNum();
//    await  getNum();
//     } catch{
//         console.log("some eroor");
//     }
//   let a = 5;
//   console.log(a); 
// }


let jsonRes = '{"fact":"Siamese kittens are born white because of the heat inside the mothers uterus before birth. This heat keeps the kittens hair from darkening on the points.","length":155}';
