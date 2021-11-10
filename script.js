const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id 
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
    
    

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1){
        computerChoice = "Rock"
    }
    if (randomNumber === 2){
        computerChoice = "Paper"
    }
    if (randomNumber === 3){
        computerChoice = "Scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        resultDisplay.innerHTML = "It's a draw!"
    }
    if(computerChoice === "Rock" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You win!"
    }
    if(computerChoice === "Rock" && userChoice === "Scissors"){
        resultDisplay.innerHTML = "You lose!"
    }
    if(computerChoice === "Paper" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You lose!"
    }
    if(computerChoice === "Paper" && userChoice === "Scissors"){
        resultDisplay.innerHTML = "You win!"
    }
    if(computerChoice === "Scissors" && userChoice === "Rock"){
        resultDisplay.innerHTML = "You win!"
    }
    if(computerChoice === "Scissors" && userChoice === "Paper"){
        resultDisplay.innerHTML = "You win!"
    }

}
