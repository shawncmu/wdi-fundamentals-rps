////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = move||getInput();
    return move;
}

function getComputerMove(move) {
    move = move||randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==='rock'){
        if (computerMove === 'rock') {winner = 'tie';}
        else if (computerMove === 'scissors') {winner = 'player';}
        else {winner = 'computer';}
    }
    if (playerMove==='paper'){
        if (computerMove === 'rock') {winner = 'player';}
        else if (computerMove === 'scissors') {winner = 'computer';}
        else {winner = 'tie';}
    }
    if (playerMove==='scissors'){
        if (computerMove === 'rock') {winner = 'computer';}
        else if (computerMove === 'scissors') {winner = 'tie';}
        else {winner = 'player';}
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins<5 && computerWins<5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var wins = getWinner(playerMove,computerMove);
        if (wins==='player') {
            playerWins +=1;
        }
        else if (wins==='computer') {
            computerWins +=1;
        }
        else console.log('This round was a tie');
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

