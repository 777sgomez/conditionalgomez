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
    alert("You guessed right! The coin flip landed on " + computerChoice);
}
else if (userChoice == "Tails") {
    alert("Sorry, the coin flip landed on " + randomNumber0);
}
else if (userChoice !== computerChoice) {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

var birthYear = prompt("What year were you born?");
var birthYear;
if ((2023 - birthYear) == 21) {
    alert("You are old enough to drink in the US..barely");
}
else if ((2023 - birthYear) > 21) {
    alert("You are old enough to drink in the US");
}
else {
    alert("Sorry, you are not old enough to drink in the US");
}

