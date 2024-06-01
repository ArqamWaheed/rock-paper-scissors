const btns = document.querySelectorAll(".buttons button");
const score = document.querySelectorAll(".result h1");
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

const output = document.createElement("p")
output.style.cssText = "font-size: 80px; text-align: center; margin-top: 10vh;"
document.querySelector("#container").appendChild(output)


btns.forEach(function(e) {
    e.addEventListener('click', () => {
        switch(e.getAttribute("id")) {
            case "rock":
                humanChoice = "Rock";
                playRound(getComputerChoice());
                break;
            case "paper":
                humanChoice = "Paper";
                playRound(getComputerChoice());
                break;
            case "scissors":
                humanChoice = "Scissors";
                playRound(getComputerChoice());
                break;
        }
    })
});

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


function playRound(computerChoice) {
    if (computerChoice === humanChoice) {
        output.textContent = `It's a TIE! ${humanChoice} can't beat ${computerChoice}`;
    }  else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        output.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }  else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        output.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }   else if (humanChoice === "Paper" && computerChoice === "Rock") {
        output.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    }   else {
        output.textContent = `You LOSE! ${humanChoice} loses to ${computerChoice}`;
        computerScore += 1;
    }
    updateScore();
    checkScore();
}

function updateScore() {
    score.forEach((e) => {
        if (e.textContent[0] == "Y") {
            e.textContent = e.textContent.slice(0,-1) + humanScore;
            
        } else {
            e.textContent = e.textContent.slice(0, -1) + computerScore;
        }
    })
}

function checkScore() {
    if (computerScore >= 5) {
        output.textContent = `Game has ended, you have LOST! Choose an option again to restart!`;
        computerScore = 0;
        humanScore = 0;
    } else if (humanScore >= 5) {
        output.textContent = `Game has ended, you have WON! Choose an option again to restart`;
        computerScore = 0;
        humanScore = 0;
    }
}







