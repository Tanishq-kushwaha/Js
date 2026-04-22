// find a max no. in any array

let arr = [1, 2, 3, 4, 4, 5, 6, 7];
// let max = 0;
// for(let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//      max = arr[i];
//     }
// };

// console.log(max);



// find a max no. in any array use of reduce method 

let max = arr.reduce((max, el)=>{
    if(max < el){
        return el;
    }else {
        return max;
    }
});

console.log(max);



