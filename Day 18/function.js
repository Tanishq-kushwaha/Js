// hello world
function hello() {
    console.log("hello world");
}


// practice qs 1
// create a function that print a poem
function poem() {
    console.log("Twinkle twinkle little star");
    console.log("how i wonder what you are.");
}

poem();  // function ko call kiya 


// practice qs 3
// create a function to roll a dice & always display the value of dice (1 to 6)
function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
console.log(rollDice());    // function ko call kiya 


// function with argument
function printInfo(name, age){
     console.log(`${name}'s age is ${age}.`);
}
printInfo("tanishq", 19);
printInfo("tanya", );

// craate a function that gives us the average of 3 numbers

function average(a, b, c){
 let avg = (a+b+c)/3;
 console.log(avg);
}

average(2, 4, 6);

