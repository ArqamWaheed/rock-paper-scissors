let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomizer = () => Math.floor(Math.random() * 3);
    let choice = randomizer();
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let selector = () => prompt("Choose R for Rock, P for Paper, or S for Scissors").toUpperCase();
    let choice = selector();
    if (choice === "R") {
        return "Rock";
    } else if (choice === "P") {
        return  "Paper";
    } else if (choice === "S") {
        return "Scissors"; 
    } else {
        return alert("Invalid option");
    }
}


function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) {
            console.log(`It's a TIE! ${humanChoice} can't beat ${computerChoice}`);
        }  else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }  else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }   else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        }   else {
            console.log(`You LOSE! ${humanChoice} loses to ${computerChoice}`);
            computerScore += 1;
        }
    }
    while (computerScore < 5 && humanScore < 5) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();  
        playRound(humanSelection, computerSelection);
    }
}


playGame();






