// setTimeout (func, timeout)
// setInterval ik diye gay delay Time par kaam karta hai jo us function me diya gya ho(ik loop ki tarah jab tak ham usey rokey nahi)


 let id = setInterval(() => {
    console.log("Hi this is tanishq")
}, 2000);

clearInterval(id); // for stop setInterval 