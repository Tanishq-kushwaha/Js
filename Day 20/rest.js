

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

let developersOnly = employees.filter((emp)=> emp.role === "Developer");


// Ab HR department ka message aaya hai. Unhe in developers ki Salary ya ID se koi matlab nahi hai. Unhe ek meeting bulani hai aur unhe strictly sirf in developers ke Naam (Names) ki ek list chahiye. (Jaise: ['Rahul', 'Aman']).

// Tumhare paas developersOnly data aa chuka hai. Ab is data par map method ka use karke sirf naamon ka naya array kaise banaoge?

// Is naye array ko developerNames naam ke variable mein store karke code likho. Dekhte hain tum objects se specific data nikalna kitni jaldi pakadte ho!