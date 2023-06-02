
// Generate random hand for the computer
function getComputerChoice() {
    let choice = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    
    //console.log(choice[randomIndex]);
    return choice[randomIndex];
}

// Handle win conditions for player
function round(playerSelection, computerSelection) {
    
    // Cases where player wins
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"))
    {
        return "You win the round!";
    } else 
    {
        return "You Lost the round!";
    }
}

function game() {
    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Enter rock, paper, or scissors: ");
        switch(playerSelection.toLowerCase()) {
            case "rock":
                console.log("Player chose rock");
            case "paper":
                console.log("Player chose paper");
            case "scissors":
                console.log("Player chose scissors");
            default:
                console.log("Player typed it wrong")
                break
        }
        console.log(round(playerSelection,getComputerChoice()));
    }
}

game();