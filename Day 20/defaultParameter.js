// giving a default value to the argument

// function func(a, b = 2){
//    do something
// }

function sum(a, b = 3) {
    return a + b;
}

console.log("We provided a specific value for 'a', but the default value for 'b' is 3; therefore, if you do not provide a value for 'b', it will automatically assume the value 3. Hence, sum(2) =", sum(2));

console.log("But when the function decides the values ​​of both A and B—for instance, `sum(2, 4)` =",sum(2, 4));