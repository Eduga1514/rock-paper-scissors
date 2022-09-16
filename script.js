/*
This is a Rock Paper Scissors game.

The game plays against the computer based on the user input. The compu-
ter then will pick a random option between rock, paper and scissors and
then it declares who's the winner.
*/

function getComputerChoice() {
    // Function that will randomly return rock, paper or scissors

    let choice;
    const randomNum = Math.floor(Math.random * 3);

    if (randomNum < 1) {
        choice = 'Rock';
    }
    else if (1 <= randomNum < 2) {
        choice = 'Paper';
    }
    else {
        choice = 'Scissors';
    }

    return choice;
}

function rpsRound(playerSelection, computerSelection) {
    // Function that plays a single round of the game. Takes two parameters:
    // playerSelection and computerSelection, and returns a String that
    // declares the winner of the round
    
    const psLowerCase = playerSelection.toLowerCase();
    const pcLowerCase = computerSelection.toLowerCase();

    let result = 'It\'s a tie!';

    if (psLowerCase === 'rock') {
        if (pcLowerCase === 'scissors') {
            result = 'You win! Rock beats Scissors';
        }
        else if (pcLowerCase === 'paper') {
            result = 'You lose, Paper beats Rock';
        }
    }
    else if (psLowerCase === 'scissors') {
        if (pcLowerCase === 'paper') {
            result = 'You win! Scissors beats Paper';
        }
        else if (pcLowerCase === 'rock') {
            result = 'You lose, Rock beats Scissors';
        }
    }
    else if (psLowerCase === 'paper') {
        if (pcLowerCase === 'rock') {
            result = 'You win! Paper beats Rock';
        }
        else if (pcLowerCase === 'scissors') {
            result = 'You lose, Scissors beats Paper';
        }
    } else {
        console.log(`Invalid input. The input was ${playerSelection},
            and it must be \'Rock\', \'Paper\', or '\ Scissors'\.`);

        return '';
    }

    return result;
}

// 