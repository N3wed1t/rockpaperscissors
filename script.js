
playerScore = 0;
comScore = 0;
function getComputerChoice(){
    const data = ['Rock', 'Paper', 'Scissors'];
    const result = data[Math.floor(Math.random() * 3)];
    return result;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === 'ROCK'){
        if(computerSelection.toUpperCase() === 'SCISSORS'){
            playerScore++;
            return 'You win! Rock beats Scissors';
        }else if(computerSelection.toUpperCase() === 'PAPER'){
            comScore++;
            return 'You lose! Paper beats Rock';
        }else {
            return 'Draw!';
        }
    }else if(playerSelection.toUpperCase() === 'PAPER'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            playerScore++;
            return 'You win! Paper beats Rock';
        }else if(computerSelection.toUpperCase() === 'SCISSORS'){
            comScore++;
            return 'You lose! Scissors beats Paper';
        }else {
            return 'Draw!';
        }
    }else if(playerSelection.toUpperCase() === 'SCISSORS'){
        if(computerSelection.toUpperCase() === 'PAPER'){
            playerScore++;
            return 'You win! Scissors beats Paper';
        }else if(computerSelection.toUpperCase() === 'ROCK'){
            comScore++;
            return 'You lose! Rock beats Scissors';
        }else {
            return 'Draw!';
        }
    }
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        result.textContent = playRound(button.id.toString(), getComputerChoice());
    })
});





/*function game(){
    
    for(let i = 0;i < 5; ){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose: Rock, Paper, Scissors");
        let gameResult = playRound(playerSelection, computerSelection);
        gameResult === 'Draw!' ? i : i++;
        console.log(gameResult);
    }
    console.log(`Player Score: ${playerScore} | Com Score: ${comScore}`);
    console.log(playerScore > comScore ? 'You win!!' : 'You lose!!');
}

game();
*/
