//Declaring all the needed variables
let computerresult = 0;
let playerresult = 0;
let computerselection, playerselection;
let playername;

const start = document.querySelector('.readybutton');
const playfunc = document.querySelector('.playagainbutton');
let finalresult = document.querySelector('.result');
const gamesection = document.querySelector('.option');
let playerpoints = document.querySelector("#playerpoint");
let comppoints = document.querySelector("#comppoint");
let final = document.createElement('p');
let playagain = document.createElement('button');
let current = document.createElement("p");
current.setAttribute('id', 'current')

//When start button is clicked the full game section is visible
start.addEventListener('click', startfunction);
function startfunction() {
    document.getElementById("fullgame").style.display = "block";
    playername = prompt("Enter name: ", "Player Name");
    document.getElementById("playbut").style.display = "none";
}

//Listening to User Options selection
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id, computerPlay());
        if (computerresult === 5 || playerresult === 5)
            gameresult(computerresult, playerresult);
    });
});

//Point calculation and display
function game(playerselection, computerselection) {
    const result = playround(computerselection, playerselection);
    if (result === "You Lose") {
        current.textContent = "oh no.. You lost this round !! " + computerselection + " beats " + playerselection;
        computerresult += 1;
    }
    else if (result === "You Win") {
        current.textContent = "Wohooo!! You won this round !! " + playerselection + " beats " + computerselection;
        playerresult += 1;
    }
    gamesection.append(current);
    playerpoints.textContent = playername + ": " + playerresult;
    comppoints.textContent = "Computer: " + computerresult;
}


//Returns a random result from the array
function computerPlay() {
    const result = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    return result[Math.floor(Math.random() * result.length)];
}


//Returns the outcome based on user and computer selection
function playround(computerselection, playerselection) {
    if (computerselection === "Rock" && playerselection === "Scissors" ||
        computerselection === "Paper" && playerselection === "Rock" ||
        computerselection === "Scissors" && playerselection === "Paper" ||
        computerselection === "Rock" && playerselection === "Lizard" ||
        computerselection === "Lizard" && playerselection === "Spock" ||
        computerselection === "Spock" && playerselection === "Scissors" ||
        computerselection === "Scissors" && playerselection === "Lizard" ||
        computerselection === "Lizard" && playerselection === "Paper" ||
        computerselection === "Paper" && playerselection === "Spock" ||
        computerselection === "Spock" && playerselection === "Rock" ||
        computerselection === "Rock" && playerselection === "Scissors"
    )
        return "You Lose";
    else if (
        playerselection === "Rock" && computerselection === "Scissors" ||
        playerselection === "Paper" && computerselection === "Rock" ||
        playerselection === "Scissors" && computerselection === "Paper" ||
        playerselection === "Rock" && computerselection === "Lizard" ||
        playerselection === "Lizard" && computerselection === "Spock" ||
        playerselection === "Spock" && computerselection === "Scissors" ||
        playerselection === "Scissors" && computerselection === "Lizard" ||
        playerselection === "Lizard" && computerselection === "Paper" ||
        playerselection === "Paper" && computerselection === "Spock" ||
        playerselection === "Spock" && computerselection === "Rock" ||
        playerselection === "Rock" && computerselection === "Scissors"
    )
        return "You Win";
    else
        current.textContent = "Its a Tie!! Try again";

}

//Displays Final Game result
function gameresult(computer, player) {
    current.remove();
    if (computer > player) {
        final.textContent = "Try again!! You lost";
        playagain.textContent = "Try Again";
        alert("You lose!!");
    }
    else {
        final.textContent = "YAYYYY!! You Won";
        playagain.textContent = "Play Again";
        alert("You won!!");
    }
    finalresult.append(final);
    document.getElementById("playbut").style.display = "initial";
    finalresult.append(playfunc);
    playfunc.addEventListener('click', restartgame);
}

//Restarts the Game
function restartgame() {
    comppoints.textContent = " ";
    playerpoints.textContent = " ";
    playerresult = 0;
    computerresult = 0;
    final.remove();
    playfunc.remove();
    document.getElementById("fullgame").style.display = "none";
}