

let names = ["tony","bruce","steve","peter"];

// let winner = names[0];
// let runnerup = names[1];

let [winner, ...runnerup] = names;
console.log(winner, runnerup);