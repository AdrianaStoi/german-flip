
let flipCards = document.querySelectorAll('.flip-cards');
let timer = document.getElementById('time');
let moveCount = document.getElementById("moves");
let popupContainer = document.getElementById("winPopContainer");
let backgrPopContainer = document.getElementById("backgroundPop");
let winTxt = document.getElementById("winText");
let newGame = document.getElementById("resetGame");

let frstCard = null;
let scndCard = null;
let initiateTimer = null;
let startTimer = null;
let flippedCard = false;
let stickBoard = false;
let seconds = 0;
let minutes = 0;
let correctMatch = 0;
let moves = 0;

//Shuffle cards function
function shuffle() {
    flipCards.forEach(flipCards => flipCards.style.order = Math.floor(Math.random() * 16));
}

// Start timer function
function startTime() {
    startTimer = setInterval(function () {
        timer.innerHTML = "Time" + "&nbsp" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
        seconds += 1;
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(startTimer);
}

// Function and click event for creating flip card 
function createFlip() {

    //Start timer on first card click
    if (initiateTimer === null) {
        startTime();
        initiateTimer = true;
    }
    if (stickBoard) return;
    if (this === frstCard) return;

    this.classList.add('flipping');

    if (!flippedCard) {
        flippedCard = true;
        frstCard = this;
        return;
    }

    scndCard = this;
    matchCheck();
}

// Function that checks match card 
function matchCheck() {
    let whenMatch = frstCard.dataset.imagecard === scndCard.dataset.imagecard;

    if (whenMatch) {
        activateMatch();
        correctMatch++;
        movesCount();
    } else {
        revertCards();
    }
    if (correctMatch == 8) {
        gameWin();
    }
}

function activateMatch() {
    frstCard.removeEventListener('click', createFlip);
    scndCard.removeEventListener('click', createFlip);
    rebootBoard();
}

function revertCards() {
    stickBoard = true;
    setTimeout(() => {
        frstCard.classList.remove('flipping');
        scndCard.classList.remove('flipping');
        rebootBoard();
    }, 900);
    movesCount();
}

//Reset frstcard and scndCard variables after each round
function rebootBoard() {
    [flippedCard, stickBoard] = [false, false];
    [frstCard, scndCard] = [null, null];
}

//Increase moves count 
function movesCount() {
    moves = parseInt(moveCount.innerText);
    moves++;
    moveCount.innerText = moves;
}

//Function win game and show win message
function gameWin() {
    if (correctMatch == 8) {
        stopTimer();
        let endTime = timer.innerHTML;
        popupContainer.style.display = "block";
        backgrPopContainer.style.display = "block";
        document.getElementById("winPopup").classList.remove("hide");
        winTxt.innerHTML = "You won with" + "&nbsp" + moves + "&nbsp" + "moves" + "&nbsp" + "in" + "&nbsp" + endTime + "!";
    }
}

//Ok button within win popup window closes window
function clickOk() {
    document.getElementById("winPopContainer").style.display = "none";
    document.getElementById("backgroundPop").style.display = "none";
}

// Displays reset game popup window
function displayResetPopup() {
    popupContainer.style.display = "block";
    backgrPopContainer.style.display = "block";
    document.getElementById("winPopup").classList.add("hide");
    document.getElementById("resetPopup").classList.remove("hide");
}

function cancelResetGame() {
    document.getElementById("resetPopup").classList.add("hide");
    document.getElementById("winPopContainer").style.display = "none";
    document.getElementById("backgroundPop").style.display = "none";
}

//Confirmation to reset game 
function confirmReset() {
    window.location.reload();
}

function initializeGame() {
    shuffle();
    //Event flip card on click
    flipCards.forEach(tile => tile.addEventListener('click', createFlip));

    //Events
    document.getElementById("okBtn").addEventListener("click", clickOk);
    document.getElementById("reset").addEventListener("click", displayResetPopup);
    document.getElementById("cancel").addEventListener("click", cancelResetGame);
    newGame.addEventListener("click", confirmReset);
}

addEventListener('DOMContentLoaded', initializeGame);