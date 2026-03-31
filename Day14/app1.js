// else statement 
let age = 1;
  if(age >= 18){
    console.log("you can vote");
  }
  else{
    console.log("You cannot vote")
  }

// trefic light system by if + else if + else
    let color = "red";
if(color === "red"){
    console.log("stop!");
}  
else if(color === "yellow"){
    console.log("Go slow");
}
else if(color === "green"){
    console.log("Go");
}
else{
    console.log("trafic light is broken");
}

//  Practice Qs ---> create a system to calculate popcorn prise on the size customer ask for 
// if size is 'XL', prise is rs 250
// if size is 'L', prise is rs 200
// if size is 'M', prise is rs 100
// if size is 'S', prise is rs 50

let size = "XL";

if(size === "XL"){
    console.log("prise is rs 250");
}
else if (size === "L"){
     console.log("prise is rs 200");
}
else if (size === "M"){
     console.log("prise is rs 100");
}
else if (size === "S"){
     console.log("prise is rs 50");
}
else{
    console.log("Plzz choos any one XL , L , M , S")
}
// Nested if else
    let marks = 80;
if(marks >= 33){
    console.log("Pass");
    // for print multiple statement
    if(marks >= 80){
        console.log("Grade : O");
    }
    else{
        console.log("Grade: A");
    }
}
else{
    console.log("Try again with Dicipline")
}

// Logical oprators 
// AND (&&)
let marks1 = 90;
if(marks >= 33 && marks >= 80){
    console.log("pass");
    console.log("A+");
}

// OR oprator (pipe--> ||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// ! Logical NOT
console.log("!true is -" );
console.log(!true);
console.log("!false is -" );
console.log(!false);

// Practice Qs--> A good string is a string that  starts with the letter "a" & has a length > 3 Write a program to find if a string is good or not.

let str = "anshika";
  if(str[0] === "a" && str.length > 3){
    console.log("Good string");
  }
  else {
    console.log("Not a good string");
  }

//   What is thw output 
//  let num = 12;
//  if((num % 3 === 0) && ((num + 1 == 15) || (num-1 == 11))){
//     console.log("safe");
//  }
//  else{
//     console.log("unsafe");
//  }


// switch statement for trafic light system
let color1 = "green";
switch(color1){
    case "red":
        console.log("stop !");
        break;
    case "yellow":
        console.log("Go slow");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("broken light");
}

// prctice Qs
// Use switch statement to print the day of the week using a number variable "day" with value 1 to 7.
// 1 = monday , 2 = tuesday & so on 
 
let day = 3;
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("This no. is not aloted for a day")
}

// for alert  
alert("this is a alert");

// for input 
prompt("Enter your name ");

