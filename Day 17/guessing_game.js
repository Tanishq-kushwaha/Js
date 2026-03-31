// user enters a max number & then tries to guess a random generated number between 1 to max .
const max = prompt("Enter the maximum no.");
let random = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess a number.");

while(true){
    if(guess == "quit"){
      console.log("quitting the game ");
      break;
    }
    if(guess == random){
        console.log("congrats! you win, the correct no is.", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: your guess is too small try again");
    }
    else if(guess > random){
        guess = prompt("Hint: your guess is too large try again")
    }
}