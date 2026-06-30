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


let jsonRes = '{"fact":"The Maine Coon is 4 to 5 times larger than the Singapur, the smallest breed of cat.","length":84}';

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);

let student = {
    name : "tanishq",
    branch : "IT",
    marks : 95,
};