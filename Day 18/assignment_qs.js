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
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (ans.indexOf(char) == -1) {
            ans += char;
        }
    }
    return ans;
}
console.log(getUnique(str));

// without using indexOf
function getUniquee(str) {
    let ans1 = "";
    for (let i = 0; i < str.length; i++) {
        let char1 = str[i];
        let isFound = false;
        for (let j = 0; j < ans1.length; j++) {
            if (char1 == ans1[j]) {
                isFound = true;
            }
        }
        if (isFound == false) {
            ans1 += char1;
        }
    }
    return ans1;
}
console.log(getUniquee(str));

// write a javascript function that accepts a list of country names as input and return the longest country name as output 
// example country = ["Australia","germany","united states of America"]
// output "United states of america"

let country = ["Australia", "germany", "united states of America"];

function longestName(country) {
    let ansIdx = 0;  // maan liya 0 index wala string sabse bada hai .
    for (let i = 0; i < country.length; i++) { // ik ik karke har ik string ko check kiya
        let ansLen = country[ansIdx].length; // jo bada hai uski length
        let currLen = country[i].length; // jis string ko check kar rahe uski length
        if(currLen > ansLen){ // kya naya wala string purane se bada hai 
            ansIdx = i ;  // agar hai to uski valu update kar do 
        }
    }
    return country[ansIdx]; 
} 
console.log(
longestName(country));