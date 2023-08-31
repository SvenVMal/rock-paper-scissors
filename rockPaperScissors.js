let playerScore = 0;
let computerScore = 0;


const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const lizardBtn = document.getElementById('lizardBtn');
const spockBtn = document.getElementById('spockBtn');

rockBtn.addEventListener('click', () => {
    game("paper");
});

paperBtn.addEventListener('click', () => {
    game("paper");
});

scissorsBtn.addEventListener('click', () => {
    game("scissors");
});


function getComputerChoice() {
    let gameChoice = ["rock", "paper", "scissors"];
    let n = Math.floor(Math.random() * 3);
    return gameChoice[n];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        
        playerScore += 1;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore += 1;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function gameOver() {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    }
}

function game(choice) {
        let playerSelection = choice;
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
}