// Expends an iterable into multiple value 

// use or three dot ->(...)

// function func(...arr){
//     do something
// }

console.log(..."TanishqKushwaha");


let arr = ["karan", "shradaha", "vivek"];

console.log(...arr);




// Task:
// You need to create a new array named `allStars` using the Spread operator (...). This single array should contain the names of both teams, and finally, you must display it using `console.log`.

let techTeam = ["Rahul", "Aman"];
let salesTeam = ["Priya", "Neha"];

let allStars = [...techTeam, ...salesTeam];

console.log(...allStars);

// object spread

let basicInfo = {
    name: "Tanishq",
    role: "Developer"
};
let contactInfo = {
    email: "tanishq@company.com",
    phone: "9876543210"
};

// Show me how to create a new object named `completeProfile` using the Spread operator (...). This single object should contain the merged data from both `basicInfo` and `contactInfo`. Finally, `console.log` it.

let completeProfile = {
    ...basicInfo,
    ...contactInfo
};

console.log(completeProfile);






// A secure API response has been received from our tech company's server, containing your data:

let apiResponse = {
    userId: 101,
    username: "TanishqCode",
    token: "auth_xyz789",
    role: "Lead Developer",
    status: "Active"
};

// Task:
// As a lead developer, you only need the username and token from this object to run the system further.
// Show me how to extract both of these in a single line using destructuring, and then console.log them both.

// (Hint: No dot . notation should be used. Variables should be created using curly braces {} in a single line).

let { username, token } = apiResponse;

console.log(username, token);


// spread array literals

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let newNum = [...num];


newNum.push(-1);// The original num array remained unchanged, but its copy array was changed.

let char = [..."hello"];


let word = "hello";
let word1 = "world";
console.log(...word, ...word1);


// spread (object literals)

const data = {
    email: "ironman@gmail.com",
    password: "12345678",
};

const copyData = { ...data, id: "tanix_ku" };



let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];//value

let object = { ...array1 }; // object -> key : value,

let object1 = {..."Tanishq kushwaha"};



