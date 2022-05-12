let winSound = new Audio('win.wav');
let loseSound = new Audio('lose.wav');
let drawSound = new Audio('draw.wav');

// The buttons variable is declared and assigned values from game buttons in html file
let buttons = document.getElementsByClassName('gameBtn');

/** Main game loop, where number of times played are based on user clicking on game button */
for (let button of buttons) {
    button.addEventListener('click', function() {
        let userChoice = this.getAttribute("data-type");
        let computerChoice = randomChoice();
        gameCompare(userChoice, computerChoice); 
    });   
}

/**Compare two opponents' choices, call relevant score function and declare game result */
function gameCompare(user, computer) {
    if (user === computer) {
        drawIncrease();
        document.getElementById('textResult').textContent = "This one's a draw...";
        drawSound.play();
    }
    else if (user === "rock" && (computer === "lizard" || computer === "scissors")) {
        userWins();
        document.getElementById('textResult').textContent = "You won! Congratulations!";
        winSound.play();
    }
    else if (user === "paper" && (computer === "rock" || computer === "spock")) {
        userWins();
        document.getElementById('textResult').textContent = "You won! Congratulations!";
        winSound.play();
    }
    else if (user === "scissors" && (computer === "paper" || computer === "lizard")) {
        userWins();
        document.getElementById('textResult').textContent = "You won! Congratulations!";
        winSound.play();
    }
    else if (user === "lizard" && (computer === "spock" || computer === "paper")) {
        userWins();
        document.getElementById('textResult').textContent = "You won! Congratulations!";
        winSound.play();
    }
    else if (user === "spock" && (computer === "rock" || computer === "scissors")) {
        userWins();
        document.getElementById('textResult').textContent = "You won! Congratulations!";
        winSound.play();
    }
    else {
        computerWins();
        document.getElementById('textResult').textContent = "The computer won... Better luck next time!";
        loseSound.play();
    }
}

/** Return random game choice */
function randomChoice () {
    let gamePicks = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 
    let randomChoice = gamePicks[Math.floor(Math.random()*gamePicks.length)];
    return randomChoice;
}

/** Increase user score by one */
function userWins () {
    let oldScore = parseInt(document.getElementById('userScore').textContent);
    document.getElementById('userScore').innerHTML = oldScore + 1;
}

/** Increase computer score by one */
function computerWins () {
    let oldScore = parseInt(document.getElementById('computerScore').textContent);
    document.getElementById('computerScore').innerHTML = oldScore + 1;
}

/** Increase draw score by one */
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

// Close modal window when user clicks on "Click to play!" button
closeModal.onclick = function() {
    modal.style.display = "none";
  }