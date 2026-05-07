// arr.forEach(some function definition and name )

let arr = [1, 2, 3, 4, 5];
function print(el) {
    console.log(el);
}

arr.forEach(print);



//or 

arr.forEach(function (el) {
    console.log(el);
});

// or


arr.forEach((el) => {
    console.log(el);
});



// arrow function
// let students = ["rohit", " viveek", " puneet"];

let friends = ["Rahul", "Aman", "Priya"];
const indexName = (name, i) => {
    console.log(`${i}, - ${name}`);
};

friends.forEach(indexName);



// Suppose you have an array of numbers:
// let numbers = [2, 4, 6];

// Show me how to write a forEach loop using an arrow function that prints the square of each number in this array (i.e., multiplies the number by itself).
// The output should look exactly like this:
// 4
// 16
// 36

let numbers = [2, 4, 6];
const square = (el) => {
    console.log(el * el);
}

numbers.forEach(square);


let array = [
    {
        name: "tanishq",
        marks: 100
    },
    {
        name: "krishna",
        marks: 88
    },
    {
        name: "priya",
        marks:94.2
    }
];

array.forEach((data)=> {
    console.log(data.marks);
});


let gpa = array.map((data)=>{
    return data.marks/10;
});


console.log(gpa);

