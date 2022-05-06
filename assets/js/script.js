let userChoice = "Scissors";
let computerChoice = "Paper";

function gameCompare(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        console.log("It is a draw")
        drawIncrease ();
    }
    else if (playerOne === "Rock" && (playerTwo === "Lizard" || playerTwo === "Scissors")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "Paper" && (playerTwo === "Rock" || playerTwo === "Spock")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "Scissors" && (playerTwo === "Paper" || playerTwo === "Lizard")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "Lizard" && (playerTwo === "Spock" || playerTwo === "Paper")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "Spock" && (playerTwo === "Rock" || playerTwo === "Scissors")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else {
        console.log("Player Two wins");
        userTwoWin ();
    }
}

gameCompare(userChoice, computerChoice);

function userOneWin () {
    let oldScore = parseInt(document.getElementById('user-score').textContent);
    document.getElementById('user-score').innerHTML = oldScore + 1;
}

function userTwoWin () {
    let oldScore = parseInt(document.getElementById('computer-score').textContent);
    document.getElementById('computer-score').innerHTML = oldScore + 1;
}

function drawIncrease () {
    let oldScore = parseInt(document.getElementById('draws').textContent);
    document.getElementById('draws').innerHTML = oldScore + 1;
}