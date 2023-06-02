
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

    let wincounter = 0;

    for (let i = 0; i < 5; i++)
    {
        let playerSelection = prompt("Enter rock, paper, or scissors: ");
        let result = round(playerSelection,getComputerChoice());
        console.log(result);

        if (result == "You win the round!")
        {
            wincounter++;
        }
    }

    if (wincounter > 2)
    {
        console.log("Player won the game");
        return "You won the game! You had: " + wincounter + " wins"; 
    } else 
    {
        console.log("Player lost the game");
        return "You lost the game! You had: " + wincounter + " wins"; 
    }
}

game();