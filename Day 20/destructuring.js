

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




// Problem
// Let's say this is the server data from our company's API:
let serverResponse = {
    db_connection_status: "Active",
    ping_ms: 12
};
// I need to destructure db_connection_status from this, but I want this new variable to be named just status in my code to keep it short and clean.

// Destructure db_connection_status as status.
let { db_connection_status: status } = serverResponse;
console.log(status);