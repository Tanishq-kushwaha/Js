// let i = 1;
// while(i <= 5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++; 
// } // we used break at 3.

const favMovie = "avatar";
let guess = prompt("guess my fav movie");
while ((guess != favMovie)) {
    if (guess == "quit") {
        console.log("You quit");
        break;
    }
    guess = prompt("wrong guess try again");
    if (guess == favMovie) {
        console.log("congrats!");
    }

}
