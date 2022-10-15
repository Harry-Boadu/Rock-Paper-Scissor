var playerSelection;
do {
  playerSelection = prompt("Do you choose ROCK, PAPER or SCISSORS?");
}
while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");
var computerSelection = Math.random();

// b. Computer makes a choice
if (computerSelection <= 0.33) {
  computerSelection = "rock";
} else if (computerSelection <= 0.67) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
var choice1 = playerSelection;
var choice2 = computerSelection;

// c. A game function will determine who wins
function game (choice1, choice2){
  if (choice1 === choice2){
    alert("A tie!");
  }
else if (choice1 === "rock"){
  if (choice2 === "paper"){
    alert("Computer chose PAPER, you LOSE!");
  } else
      alert("Computer chose SCISSORS, you WIN!");
  }
else if (choice1 === "paper"){
  if (choice2 === "scissors"){
    alert("Computer chose SCISSORS, you LOSE!");
  } else
      alert("Computer chose ROCK, you WIN!");
  }
else if (choice1 === "scissors"){
  if (choice2 === "rock"){
    alert ("Computer chose ROCK, you lose!");
  } else
      alert("Computer chose PAPER, you WIN!");
  }
}
game (playerSelection, computerSelection);
console.log("You chose:", choice1, "||", "Computer chose:", choice2);
