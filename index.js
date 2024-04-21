// Check if person can get a birthday card from the king

let age = 100;



// Check age of player

let age = 20;

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}

Card section of game

let firstCard = 6;
let secondCard = 9;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("You got Blackjack!");
} else {
    console.log("You're out of the game. Better luck next time");
}