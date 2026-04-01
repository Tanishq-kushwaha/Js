// A function that does one or both. 

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("hello");

}
multipleGreet(greet, 9);



let odd = function (n) {
    console.log(!(n % 2 == 0));
}

let even = function (n) {
    console.log(n % 2 == 0);
}
// return a function

function oddOrEvenFactory(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}
// let request = "odd"; // even
let testOdd = oddOrEvenFactory("odd");
testOdd(5);
