// Ans 1
let num = 100;
 if(num % 10 == 0){
        console.log("good");
 }
 else {
    console.log("Bad");
 }

// Ans 2

//  let firstName = prompt("Enter your name :");
// let age = prompt("Enter your age:");
// alert(`${firstName} is ${age} year old.` );

// Ans 3
let quarter = 1;
 switch(quarter){
    case 1:
        console.log("January , February , March ");
        break;
    case 2:
        console.log("April , May , June ");
        break;
    case 3:
        console.log("July , August , Septmber ");
        break;
    case 4:
        console.log("October , November , December");
        break;
    default:
        console.log("Invalid");
 }

//  Ans 4
let str = "ashiki2";
if((str[0] === "a" || str[0] === "A")  && (str.length > 5) ){
    console.log("Golden string");
}
else{
    console.log("Not a golden string");
}

// Ans 5
let a = 100;
let b = 200;
let c = 3000;
if(a > b && a > c){
    console.log( a, "is largest");
}
else if(b > a && b > c){
    console.log( b,"is largest");
}
else{
    console.log( c," is largest");
}

// Ans 6
let num1 = 6262773272;
let num2 = 6632787322;
if((num1 % 10) == (num2 % 10) ){
    console.log("Last number are same ", num1 % 10);
}
else{
    console.log("Lsat Number are not same ");
}