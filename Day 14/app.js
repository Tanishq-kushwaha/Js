// To write (log) a message on the console

console.log("Cheak java script");
console.log("Tanishq kushwaha");
console.log(1234);
console.log(12+12);

// template litrals
// they are used to add embeded expression in a string 

let a = 5;
let b = 10;
    console.log(`your pay ${a+b} rupees`);

// oprators in JS

  let age = 14;
  let newAge = age++;
  console.log(newAge);
  console.log(age);

// if statement
console.log("before my if statement")
    let age1 = 20;
    if (age1 >= 18){
    console.log("you can vote");
}
console.log("after my if statement")
//  next example of if statement
let firstName = "Tanishq";
  if(firstName == "Tanishq"){
    console.log(`welcome ${firstName}`);
  }   

//   create a trafic light system that shows what to do basd on color 
// red--> stop!
// yellow--> Go slow!
// green--> Go!
let color = "green";
 if(color === "red"){
    console.log("stop!");
   }
 if(color === "yellow"){
    console.log("Go slow!");
   } 
if(color === "green"){
    console.log("Go!");
}
// else if statement
// Marks system
let marks = 75;

if(marks >= 80){
    console.log("A+");
}
else if(marks >= 70){
    console.log("A");
}
else if(marks >= 60){
    console.log("B");
}
else if(marks >= 50){
    console.log("C");
}
else if(marks >= 33){
    console.log("D");
}
else if(marks <= 32 ){
    console.log("F");
}

// 