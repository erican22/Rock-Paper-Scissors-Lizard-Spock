let userChoice = "Scissors";
let computerChoice = "Paper";

function gameCompare(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        console.log("It is a draw")
    }
    else if (playerOne === "Rock" && (playerTwo === "Lizard" || playerTwo === "Scissors")) {
        console.log("Player One wins");
    }
    else if (playerOne === "Paper" && (playerTwo === "Rock" || playerTwo === "Spock")) {
        console.log("Player One wins");
    }
    else if (playerOne === "Scissors" && (playerTwo === "Paper" || playerTwo === "Lizard")) {
        console.log("Player One wins");
    }
    else if (playerOne === "Lizard" && (playerTwo === "Spock" || playerTwo === "Paper")) {
        console.log("Player One wins");
    }
    else if (playerOne === "Spock" && (playerTwo === "Rock" || playerTwo === "Scissors")) {
        console.log("Player One wins");
    }
    else {
        console.log("Player Two wins");
    }
}

gameCompare(userChoice, computerChoice);