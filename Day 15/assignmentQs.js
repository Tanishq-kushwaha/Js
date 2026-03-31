// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);



// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

let ans1 = arr.slice(arr.length - n);
console.log(ans1);

// Qs3. Write a JavaScript program to check whether a string is blank or not

// let str = prompt("enter a string");

// if (str.length == 0) {
//     console.log("string is empty");
// }
// else {
//     console.log("string is not empty");

// }

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
 let str1 = "TAnISHQ";
 let idx = 2;
 
 if(str1[2] == str1[2].toLowerCase()){
    console.log("character is lowercase");
 }
 else {
      console.log("character in not lowercase");
 }
//  Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
//  let pro = prompt("Enter your string");
//  console.log(`original string = ${pro}`);
//  console.log(`your string = ${pro.trim()}`)


// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr1 = ["tanishq",1,2,3,4,5,6,7,8,9,"hello"]; // ik array le liya.
let item = 4; // ye wo item hai jisey array me find karna hai.
// if( arr1.indexOf(item)!= -1 )

if(arr1.includes(item)){  // ye bhi use kar sakte hai
   console.log("yes available");
}
else{
   console.log("Not available");
}