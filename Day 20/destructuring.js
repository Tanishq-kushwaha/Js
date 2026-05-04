

let names = ["tony", "bruce", "steve", "peter"];

// let winner = names[0];
// let runnerup = names[1];

let [winner, ...runnerup] = names;
console.log(winner, runnerup);



// Suppose this data is coming from your system:
let laptop = {
    brand: "ThinkPad",
    specs: {
        ram: "16GB",
        processor: "i7"
    }
};

// Using this new nested destructuring syntax, can you show me how to exit a processor in one line?


let { specs: { processor } } = laptop;
console.log(processor);