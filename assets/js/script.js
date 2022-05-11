
let buttons = document.getElementsByClassName('gamebtn');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let userChoice = this.getAttribute("data-type");
        console.log(userChoice);
        let computerChoice = randomChoice();
        console.log(computerChoice);
        gameCompare(userChoice, computerChoice); 
    })   
}

function gameCompare(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        console.log("It is a draw")
        drawIncrease ();
    }
    else if (playerOne === "rock" && (playerTwo === "lizard" || playerTwo === "scissors")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "paper" && (playerTwo === "rock" || playerTwo === "spock")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "scissors" && (playerTwo === "paper" || playerTwo === "lizard")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "lizard" && (playerTwo === "spock" || playerTwo === "paper")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else if (playerOne === "spock" && (playerTwo === "rock" || playerTwo === "scissors")) {
        console.log("Player One wins");
        userOneWin ();
    }
    else {
        console.log("Player Two wins");
        userTwoWin ();
    }
}

function randomChoice() {
    let gamePicks = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 
    let randomChoice = gamePicks[Math.floor(Math.random()*gamePicks.length)];
    return randomChoice;
}

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

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var closeModal = document.getElementsByClassName("closeBtn")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  closeModal.onclick = function() {
      modal.style.display = "none";
  }