// create a program that generate a random number representing a dice roll
// [the no. should be between 1 and 6]
let dice = Math.floor(Math.random()*6)+1;
console.log(dice);



// create an object representing a car that stores the following properties for the car : name ,model, color
// print the car name 
let car = {
    name : "thar",
    model : "7OO",
    color : "black"
}
console.log(car.name);


// create an object person with there name , age and city , edit there city's original value to change it to "new york" and a new property country and set it to the "united states"

let person = {
    name : "carl johnson",
    age : 35,
    city : "san abdias"
}

person.city = "London";
person.country = "united states";
console.log(person);