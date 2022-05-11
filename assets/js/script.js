
let buttons = document.getElementsByClassName('gamebtn');

for (let button of buttons) {
    button.addEventListener('click', function() {
        let userChoice = this.getAttribute("data-type");
        let computerChoice = randomChoice();
        gameCompare(userChoice, computerChoice); 
    })   
}

function gameCompare(user, computer) {
    if (user === computer) {
        drawIncrease ();
        document.getElementById('text-result').textContent = "This one's a draw..."
    }
    else if (user === "rock" && (computer === "lizard" || computer === "scissors")) {
        userWins ();
        document.getElementById('text-result').textContent = "You won! Congratulations!"
    }
    else if (user === "paper" && (computer === "rock" || computer === "spock")) {
        userWins ();
        document.getElementById('text-result').textContent = "You won! Congratulations!"
    }
    else if (user === "scissors" && (computer === "paper" || computer === "lizard")) {
        userWins ();
        document.getElementById('text-result').textContent = "You won! Congratulations!"
    }
    else if (user === "lizard" && (computer === "spock" || computer === "paper")) {
        document.getElementById('text-result').textContent = "You won! Congratulations!"
        userWins ();
    }
    else if (user === "spock" && (computer === "rock" || computer === "scissors")) {
        userWins ();
        document.getElementById('text-result').textContent = "You won! Congratulations!"
    }
    else {
        computerWins ();
        document.getElementById('text-result').textContent = "The computer won... Better luck next time!"
    }
}

function randomChoice () {
    let gamePicks = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 
    let randomChoice = gamePicks[Math.floor(Math.random()*gamePicks.length)];
    return randomChoice;
}

function userWins () {
    let oldScore = parseInt(document.getElementById('user-score').textContent);
    document.getElementById('user-score').innerHTML = oldScore + 1;
}

function computerWins () {
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