
let flipCards = document.querySelectorAll('.flip-cards');

let frstCard, scndCard; // variables for checking card match
let flippedCard = false;
let stickBoard = false;

let timer = document.getElementById('time');
let seconds = 0;
let minutes = 0;
let initiateTimer = null;
let startTimer;

let moveCount = document.getElementById("moves");
let popupContainer = document.getElementById("winPopContainer");
let popUp = document.getElementById("winPopup");
let winTxt = document.getElementById("winText");
let correctMatch = 0;
let moves;


//Shuffle cards on window load
function shuffle() {
    flipCards.forEach(flipCards => flipCards.style.order = Math.floor(Math.random() * 16));
};

window.onload = function () {
    shuffle();
};

// Start timer function
function startTime() {
    startTimer = setInterval(function () {
        timer.innerHTML = "Time" + "&nbsp" + minutes + ":" + seconds;
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

    //start timer on first card click
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

//Event flip card on click
flipCards.forEach(tile => tile.addEventListener('click', createFlip));


// function that checks match card 
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
        //stickBoard = false;
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

//function win game and show win message
function gameWin() {
    if (correctMatch == 8) {
        stopTimer();
        let endTime = timer.innerHTML;
        popupContainer.style.display = "block";
        popUp.style.display = "block";
        winTxt.innerHTML = "You won with" + "&nbsp" + moves + "&nbsp" + "moves" + "&nbsp" + "in" + endTime + "!";
    };
}

let okayBtn = document.getElementById("okBtn");
okayBtn.addEventListener("click", e => {
    popupContainer.style.display = "none";
    popUp.style.display = "none";
});














