// question 1
//  check if all number in our array are multiples of 10 or not

let arr = [1, 2, 30, 40, 50,];

// let ans = arr.every((el) => {
//     if (el % 10 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

//console.log("All no. are multiples of 10 ", ans);


let ans = arr.every((el) => el % 10 == 0);
console.log(ans);