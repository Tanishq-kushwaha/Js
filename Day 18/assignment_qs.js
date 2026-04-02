// answer 1
// write a javascript function that return array elements larger then a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//  element larger then  number num
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr, num)

console.log("next array");

//  answer

function shortArr(n) {
    let arr1 = [25, 12, 45, 7, 33, 19, 50, 2];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > n) {
            console.log(arr1[i]);
        }
    }
    return "Done";
}
shortArr(20);


// question 2
//  write a javascript function to extract unique characters from a string
// example str = "abcdabcdefgggh"
    //   ans = "abcdefgh"

let str = "abcdabcdefgggh";
function getUnique(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){
        if(ans.indexOf(str[i]) == -1){
            ans = ans + str[i];
        }
    }
    return ans;
} 
getUnique();