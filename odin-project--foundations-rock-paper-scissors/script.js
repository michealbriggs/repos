// sets the player and computers scores
let pScore = 0;
let cScore = 0;
// selects the computers choice via random
function getComputerChoice() {
    const ranNum = Math.floor(Math.random()*100);
    if (ranNum <= 33){
        return "rock";
    } else if (ranNum > 33 && ranNum < 66){
        return "paper";
    } else {
        return "scissors";
    }   
}
// prompts the user for a selection via input
function getPlayerChoice(){
    const playerInput= prompt("Rock, Paper, or Scissors?").toLowerCase();
    return playerInput;
}


// plays a single round of rock, paper and scissors
function oneRound(playerChoice, computerChoice){
if (playerChoice === "rock" && computerChoice === "rock"){
    return "Tie!";
    } else if (playerChoice === "paper" && computerChoice === "paper"){
    return "Tie!";
    } else if (playerChoice === "scissors" && computerChoice === "scissors"){
    return "Tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors")
    {
    pScore++;
    return "You win! " + playerChoice + " beats " + computerChoice + "!";
    } else if (playerChoice === "scissors" && computerChoice === "paper")
    {
    pScore++;
    return "You win! " + playerChoice + " beats " + computerChoice + "!";
    } else if (playerChoice === "paper" && computerChoice === "rock")
    {
    pScore++;
    return "You win! " + playerChoice + " beats " + computerChoice + "!";
    }  else if (playerChoice === "rock" && computerChoice === "paper")
    {
    cScore++;
    return "You Lose! " + computerChoice + " beats " + playerChoice + "!";
    } else if (playerChoice === "scissors" && computerChoice === "paper")
    {
    cScore++;
    return "You Lose! " + computerChoice + " beats " + playerChoice + "!";
    } else (playerChoice === "paper" && computerChoice === "scissors")
    {
    cScore++;
    return "You Lose! " + computerChoice + " beats " + playerChoice + "!";
    }
}
// plays five rounds of rock paper and scissors then outputs the victor
function game(){
    for (let i =0; i < 5; i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(oneRound(playerChoice, computerChoice));
    }
if (pScore > cScore){
    return "Mankind Prevails! " + "Player: " + pScore  + " Computer: " + cScore ;
    } else {
    return "Science Triumphs! " + "Player: " + pScore  + " Computer: " + cScore ;
    }
    }

console.log(game());
// console.log(playerChoice);
// console.log(getComputerChoice());
// console.log(oneRound(playerChoice, computerChoice));
// console.log(game(oneRound(playerChoice, computerChoice)));