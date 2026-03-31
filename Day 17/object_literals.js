// syntax
let delhi = {
    latitude: "28.7041",
    longitude: "77.1025"
};



const student = {
    name: "tanishq",
    age: 19,
    marks: 95.5,
    city: "kanpur",
};


// twitter post
const post = {
    username: "@tanishx.kushwaha",
    content: "this is my #post",
    likes: 200,
    repost: 5,
    tags: ["@shivam", "@krishna"]
};

// get values
let student1 = {
    name: "tanishq",
    marks: 95.8,
}


// conversion in get values
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};


// add update value
const baccha = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Dilhi"
}

// Nested object 

const classInfo = {
    aman: {
        grade: "A",
        city: "delhi"
    },
    tanishq: {
        grade: "A++",
        city: "kanpur"
    },
    karan: {
        grade: "B",
        city: "jaipur"
    }
};


// Array in object 

const classInfor = [
    {
        grade: "A",
        city: "delhi"
    },
    {
        grade: "A++",
        city: "kanpur"
    },
    {
        grade: "B",
        city: "jaipur"
    }
];


// random integers fron 1 to 10
// step 1
let num = Math.random();
// step 2
num = num * 10;
// step 3
num = Math.floor(num);
// step 4
num = num + 1;


//    in one step
let random1 = Math.floor(Math.random() * 10) + 1;

let random2 = Math.random(Math.floor() * 10) + 1;   // is one line code me kuch dikkat hai kya check karo

// formula for no min to max ---> Math.floor(Math.random()* (max - min +1)) + min;

// practice Qs

// 1. generate a random no between 1 to 100

let random100 = Math.floor(Math.random() * 100) + 1;

// 2. generate a random no. between 1 to 5
let random5 = Math.floor(Math.random() * 5) + 1;
