// Given the string let mantra = "Focus, Strategy, Success, Repeat";, write the code to find the exact starting index of the word "Success".
let mantra = "Focus, Strategy, Success, Repeat";
let print = mantra.indexOf("Faliar");
console.log(print);

// Time is money! Instead of writing multiple lines of code, how can you use method chaining to take the string let rawData = "   profits   ";, strip away the empty spaces, and convert it completely to uppercase in just one single line of code?
let rawData = "   profits   ";
let newData = rawData.trim().toUpperCase(); console.log(newData);

// Given the string let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";, write the code using slice() to extract exactly "HIJK".
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ans = alphabet.slice(7, 11);
console.log(ans);

//    What is the strategic advantage of passing negative arguments to slice(), such as slice(-4)? What would that specific code output from the alphabet string?
alphabet.slice(-4); // WXYZ