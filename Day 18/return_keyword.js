// return keyword is used to return some value from the function.

function isAdult(age){
    if(age >= 18){
        return "adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(13));


// return function ke andar use hota hai
// kisi valu ke ke function ko bahar bhejta hai
// function ko wahin stop bhi kar deta hai


// practice Qs 
// create a function that return the sum of numbers from 1 to n

function getSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++ ){
        sum = sum + i;
    }
    return sum;
}

getSum(100);