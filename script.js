let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const container = document.querySelector('.container')

function getComputerChoice(){
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        const p = document.createElement('p')
        p.innerText = 'You tied! You both picked rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        const p = document.createElement('p')
        p.innerText = 'You tied! You both picked scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        const p = document.createElement('p')
        p.innerText = 'You tied! You both picked paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        compScore++
        const p = document.createElement('p')
        p.innerText ='You lost! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Paper covers rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You win! Paper covers rock'
        outcomeDiv.appendChild(p)
    }
   
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5){
      const h2 = document.createElement('h2')
      h2.classList.add('player-won')
      h2.innerText = `You Won ${playerScore} to ${computerScore} great job beating the computer!`
      outcomeDiv.append(h2)
    } else if (computerScore === 5){
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${computerScore} great job beating the computer!`
        outcomeDiv.append(h2)
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, compScore)
})

// function game(){
//     for(let i = 0; i <5; i++){
//        const playerSelection = prompt('Choose the sign to throw', 'Rock, Paper, Scissors').toLowerCase()
//        const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection)) 
//     }
  
//    if (playerScore > compScore){
//     return 'The computer lost! You win the game!'
//    } else if (playerScore < compScore) {
//     return 'The computer won! Which means you lost!'
//    } else {
//     return 'You are tied with the computer'
//    }
//   }


// (game())