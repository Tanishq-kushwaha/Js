

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