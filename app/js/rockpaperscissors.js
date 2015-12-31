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
    var move = move||'getInput()';
    return move;
}

function getComputerMove(move) {
    var move = move||'randomPlay()';
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
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

