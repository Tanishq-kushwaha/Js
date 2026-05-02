

function sum(...args) {
    return args.reduce((add, el) => add + el, 0);
}
sum(2, 3, 4, 5, 6, 6, 7, 8, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4);

//problem


let topPerformers = ["Rahul", "Aman", "Priya", "Neha", "Karan"];

// Task:
// Tumhe Destructuring aur Rest operator ka use karke ek hi line mein yeh kaam karna hai:

// Sabse pehle naam ko ek variable mein dalo jiska naam ho bestEmployee.

// Baaki ke saare bache hue naamo ko Rest operator ka use karke ek naye array  mein samet lo, jiska naam ho regularEmployees.

// End mein dono ko console.log karke dikhao. (Jaise: console.log(bestEmployee, regularEmployees);)



let [bestEmployee, ...regularEmployees] = topPerformers;

console.log(bestEmployee);//Rahul

console.log(regularEmployees);//(4) ['Aman', 'Priya', 'Neha', 'Karan']



// finding min 
function min(...args) {
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

min(98, 32, 43, 54, 0, -1);


//Let's say you're the lead developer at my tech company and we have this data coming from an API:

let employees = [
    { id: 101, name: "Rahul", role: "Developer", salary: 50000 },
    { id: 102, name: "Neha", role: "Designer", salary: 45000 },
    { id: 103, name: "Aman", role: "Developer", salary: 60000 },
    { id: 104, name: "Priya", role: "Manager", salary: 80000 }
];

//I need to extract the entire object from this entire data set containing only those employees whose role is "Developer". Store this result in a new variable called developersOnly.

let developersOnly = employees.filter((emp)=> emp.role === "Developer");

// Now you've received a message from the HR department. They don't care about the salaries or IDs of these developers. They need a meeting and they strictly need a list of these developers' names (e.g., ['Rahul', 'Aman']).

// You have the developersOnly data. Now, how do you create a new array of names using the map method on this data?

// Storage this new array in a variable called developerNames and write the code. Let's see how quickly you can extract specific data from objects!

let developerNames = developersOnly.map((emp)=> emp.name);

