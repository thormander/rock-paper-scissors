function getComputerChoice() {
    let choice = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * choice.length);
    
    console.log(choice[randomIndex]);
    return choice[randomIndex];
}

getComputerChoice();