let playerScore = 0;
let computerScore = 0;

const gameInfo = document.getElementById('game-info');
const gameMsg = document.getElementById('game-msg');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const getComputerScore = document.getElementById('computer-score')
const getPlayerScore = document.getElementById('player-score')
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

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
    let testMsg = [];

    if (playerSelection === computerSelection) {
        winner = "It's a tie!";
        winnerInfo = "No points!";
        testMsg.push(winner,winnerInfo);
        //return "It's a tie!";
    }
    else if (
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        
        playerScore += 1;
        winner = "You win!";
        winnerInfo = playerSelection + " beats " + computerSelection;
        testMsg.push(winner,winnerInfo);
        //return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore += 1;
        winner = "You lose!";
        winnerInfo = computerSelection + " beats " + playerSelection;
        testMsg.push(winner,winnerInfo);
        //return "You lose! " + computerSelection + " beats " + playerSelection;
    }

    return testMsg;
    
}

function gameOver() {
    if (playerScore == 5 || computerScore == 5) {
        return true;
    }
}

function game(choice) {
        let playerSelection = choice;
        let computerSelection = getComputerChoice();
        let play = playRound(playerSelection, computerSelection)
        console.log(play);
        //gameInfo.textContent = play;
        updateScoresMessage(play);
        updateChoice(playerSelection, computerSelection);
        updateScores();

}

function updateScores() {
    getComputerScore.textContent = "Computer score: " + computerScore;
    getPlayerScore.textContent = "Your score: " + playerScore;
}

function updateChoice(player, computer) {
    playerChoice.textContent = "Your choice: " + player;
    computerChoice.textContent = "Computer choice: " + computer;
}

function updateScoresMessage(play) {
    gameInfo.textContent = play[0];
    gameMsg.textContent = play[1];
}