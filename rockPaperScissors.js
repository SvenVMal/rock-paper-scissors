function getComputerChoice() {
    let gameChoice = ["rock", "paper", "scissors"];
    let n = Math.floor(Math.random() * 3);
    return gameChoice[n];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());