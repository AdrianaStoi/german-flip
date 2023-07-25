
let flipCards = document.querySelectorAll('.flip-cards');

let frstCard, scndCard; // variables for checking card match
let flippedCard = false;
let stickBoard = false;

let timer = document.getElementById('time');
let seconds = 0;
let minutes = 0;
let initiateTimer = null;
let startTimer;



//Shuffle cards on window load
function shuffle() {
    flipCards.forEach(flipCards => {
        let randmPosition = Math.floor(Math.random() * 16);
        flipCards.style.order = randmPosition;
    });

}

window.onload = function () {
    shuffle();
};

// Start timer function
function startTime() {
    startTimer = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        timer.innerHTML = "Time" + "&nbsp" + minutes + ":" + seconds;
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
    //flippedCard = false;
    matchCheck();
}

// function that checks match card 
function matchCheck() {
    let whenMatch = frstCard.dataset.imagecard === scndCard.dataset.imagecard;

    if (whenMatch) {
        activateMatch();
    } else {
        revertCards();
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
    let moveCount = document.getElementById("moves");
    let moves = parseInt(moveCount.innerText);
    moves++;
    moveCount.innerText = moves;
}


flipCards.forEach(tile => tile.addEventListener('click', createFlip));
//flipCards.forEach(tile => tile.addEventListener('click', startTime));













