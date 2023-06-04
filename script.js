var randomNumber0 = "Heads";
var randomNumber1 = "Tails";

let computerChoice = (Math.random()>0.5)? 1:0;
console.log(computerChoice)

var userChoice = prompt("Heads or Tails?");
var userChoice;
if (userChoice == "Heads") {
    alert("You guessed right! The coin flip landed on " + randomNumber0);
}
else if (userChoice == computerChoice) {
    alert("Sorry, the coin flip landed on " + computerChoice);
}
