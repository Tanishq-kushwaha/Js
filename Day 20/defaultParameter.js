// giving a default value to the argument

// function func(a, b = 2){
//    do something
// }

function sum(a, b = 3) {
    return a + b;
}

console.log("a ki value apney di lekin  b ki default value 3 hai is liye jab b ki value nahi dogey to wo automatically 3 hi lega  is liye sum(2) =", sum(2));

console.log("lekin jab a aur b dono ki value aab hi decide kare jese sum(2, 4) =",sum(2, 4));