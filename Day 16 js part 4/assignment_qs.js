// question 1
// write a js program to delete all occurrence of element 'num' in a given array
// example if arr= [1,2,3,4,5,6,2,3]  & num = 2
// result should be arr = [1,3,4,5,6,3]
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);

// write a js program to find the number of digits in a number 
// example---- if number = 287152;  count = 6
let num = 287177452;
dig = num.toString().length;
console.log(dig);

// write a js program to find the sum od digits in a number 
// example -- if number=  287152; sum = 25
let number = 287152;
let sum = 0;
while (number > 0) {
    sum = (number % 10) + sum; // variable ko update kiya 
    number = Math.floor(number / 10); // math floor ka use point ke pichey ka no. dlt karne ke liye karte hai 
}
console.log(sum);



// print the factorial of a number n  
let value = 7;
let fact = 1;
let i = 1;
while (i <= value) {
    fact = fact * i;
    i++;
}
console.log(fact);


// find the largest number in an array with only positive Number
let array = [2, 5, 6, 10, 2, 8];
// let array2 = array.sort((a, b) => b - a);
// let numb = array[0];
// if (numb > 0) {
//     console.log(numb);
// }
let max = array[0];
for(let i=0; i<array.length;i++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log(max);