function getComputerChoice(){
    const data = ['Rock', 'Paper', 'Scissors'];
    const result = data[Math.floor(Math.random() * 3)];
    return result;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === 'ROCK'){
        if(computerSelection.toUpperCase() === 'SCISSORS'){
            return 'You win! Rock beats Scissors';
        }else if(computerSelection.toUpperCase() === 'PAPER'){
            return 'You lose! Paper beats Rock';
        }else {
            return 'Draw!';
        }
    }else if(playerSelection.toUpperCase() === 'PAPER'){
        if(computerSelection.toUpperCase() === 'ROCK'){
            return 'You win! Paper beats Rock';
        }else if(computerSelection.toUpperCase() === 'SCISSORS'){
            return 'You lose! Scissors beats Paper';
        }else {
            return 'Draw!';
        }
    }else if(playerSelection.toUpperCase() === 'SCISSORS'){
        if(computerSelection.toUpperCase() === 'PAPER'){
            return 'You win! Scissors beats Paper';
        }else if(computerSelection.toUpperCase() === 'ROCK'){
            return 'You lose! Rock beats Scissors';
        }else {
            return 'Draw!';
        }
    }
}

const playerSelection = 'Paper';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
