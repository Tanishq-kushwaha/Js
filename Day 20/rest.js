

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


// Maan lo tum meri tech company ke Lead Developer ho aur humare paas API se yeh data aaya hai:

let employees = [
    { id: 101, name: "Rahul", role: "Developer", salary: 50000 },
    { id: 102, name: "Neha", role: "Designer", salary: 45000 },
    { id: 103, name: "Aman", role: "Developer", salary: 60000 },
    { id: 104, name: "Priya", role: "Manager", salary: 80000 }
];

// Mujhe is poore data mein se sirf un employees ka poora object alag nikal kar do, jinka role "Developer" hai. Is result ko ek naye variable developersOnly mein store karo.

let developerOnly = employees.filter((emp)=> emp.role === "Developer");