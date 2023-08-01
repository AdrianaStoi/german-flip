
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

/**
 * Shuffle cards function
 */
function shuffle() {
    flipCards.forEach(flipCards => flipCards.style.order = Math.floor(Math.random() * 16));
}

/**
 *  Start timer function which displays seconds and minutes
 */
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

/**
 * Function and click event for creating flip card   
 * For creating this function I used the tutorial below and customized accordingly:
 *  https://marina-ferreira.github.io/tutorials/js/memory-game/
 */
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

/**
 * Function that checks match card by checking dataset property
 * For creating this function, I used the tutorial below and customized accordingly:
 * https://marina-ferreira.github.io/tutorials/js/memory-game/ 
 */
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

/**
 * Function that detaches the event listeners on both cards
 */
function activateMatch() {
    frstCard.removeEventListener('click', createFlip);
    scndCard.removeEventListener('click', createFlip);
    rebootBoard();
}

/**
 * Function that turn back the cards by 900ms timeout that removes the class "flipping"
 */
function revertCards() {
    stickBoard = true;
    setTimeout(() => {
        frstCard.classList.remove('flipping');
        scndCard.classList.remove('flipping');
        rebootBoard();
    }, 900);
    movesCount();
}

/**
 * Reset frstcard and scndCard variables after each round
 */
function rebootBoard() {
    [flippedCard, stickBoard] = [false, false];
    [frstCard, scndCard] = [null, null];
}

/**
 * Increase moves count 
 */
function movesCount() {
    moves = parseInt(moveCount.innerText);
    moves++;
    moveCount.innerText = moves;
}

/**
 * Function in case of win game if variable correctMatch is 8 
 * If condition is met the win message is displayed by removing "hide" class
 */
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

/**
 * Function for "Ok" button within win popup window
 * On click, it closes window by adding property "display: none" to winPopcontainer and backgroundPop
 */
function clickOk() {
    document.getElementById("winPopContainer").style.display = "none";
    document.getElementById("backgroundPop").style.display = "none";
}

/**
* Function that displays reset game popup window 
* On click, it adds property "display: block" to winPopcontainer and backgroundPop
*/
function displayResetPopup() {
    popupContainer.style.display = "block";
    backgrPopContainer.style.display = "block";
    document.getElementById("winPopup").classList.add("hide");
    document.getElementById("resetPopup").classList.remove("hide");
}

/**
 * Function that closes pop-up window
 */
function cancelResetGame() {
    document.getElementById("resetPopup").classList.add("hide");
    document.getElementById("winPopContainer").style.display = "none";
    document.getElementById("backgroundPop").style.display = "none";
}

/**
 * Function that resets game by window reload
 */
function confirmReset() {
    window.location.reload();
}

/**
 * Function for DOMContentLoaded event
 */
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