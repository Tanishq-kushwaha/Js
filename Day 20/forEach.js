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


arr.forEach((el)=> {
    console.log(el);
});



// arrow function
// let students = ["rohit", " viveek", " puneet"];

let friends = ["Rahul", "Aman", "Priya"];
const  indexName = (name, i) => {
        console.log(`${i}, - ${name}`);
};

friends.forEach(indexName);   


// Maan lo tumhare paas ek numbers ka array hai:
// let numbers = [2, 4, 6];

// Mujhe ek arrow function ke sath forEach loop likh kar dikhao jo is array ke har number ka square print kare (yani number ko usi number se multiply kare).
// Output sirf yeh aana chahiye:
// 4
// 16
// 36

let numbers = [2, 4, 6];
const square = (el) => {
   console.log(el*el);
}

numbers.forEach(square);






