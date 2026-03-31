// array method
// indexof -> index no. ke liye upyoog karen
let primary = ["red", "yellow", "blue"];
// primary.indexOf("yellow");
// primary.indexOf("yellow");

// includes-> search for a value ya to value true hogi ya to false
primary.includes("red");

// concal -> merge 2 array
let secondary = ["orange", "green", "violet"];
let colors = primary.concat(secondary);

// reverse an array
primary.reverse();

// slice -> Copies a portion of an array
// colors.slice();
// colors.slice(2);
// colors.slice(2,4);



// splice in array
let color1 = ["violet","indigo","blue","green","yellow","orange","red"];
//color1.splice(2);  // index 2 tak dlt karne ke liye 
// color1.splice(0,0,"white");


// sort in array 
let days = ["monday","sunday","wednesday","tuesday"];
// days.sort();


let numbers = [10, 1, 21, 2];

// Ascending (chhote se bade)
numbers.sort((a, b) => a - b);
// Output: [1, 2, 10, 21] ✅

// Descending (bade se chhote)
numbers.sort((a, b) => b - a);
// Output: [21, 10, 2, 1] ✅



// practice QS
// for the given start state of an array change it to final form splice method 
// start -> ['january','july','march','august']
// final -> ['july','june','march','august']
let months = ['january','july','march','august'];

// months.splice(0,2,"july","june");

// return thr indexof the "javascript" from the given array if it was reversed
let lang = ["C","C++","html","javascript","python","java","C#","sql"];

// let index = lang.reverse().indexOf("javascript");




