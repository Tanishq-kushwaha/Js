// arr.forEach(some function definition and name )

let arr = [1, 2, 3, 4, 5];
function print(el) {
    console.log(el);
}

arr.forEach(print);



//or 

arr.forEach(function (el) {
    console.log(el);
});




let friends = ["Rahul", "Aman", "Priya"];
friends.forEach(function (el) {
    console.log(el)
});