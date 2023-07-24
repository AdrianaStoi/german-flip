
let flipCards = document.querySelectorAll('.flip-cards');

let frstCard, scndCard; // variables for checking card match
let flippedCard = false;
let stickBoard = false;

// Function and click event for creating flip card 
function createFlip() {
    if (stickBoard) return;
    this.classList.add('flipping');

    if (!flippedCard) {
        flippedCard = true;
        frstCard = this;
        return;
    }

    scndCard = this;
    flippedCard = false;
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
}

function revertCards() {
    stickBoard = true;

    setTimeout(() => {
        frstCard.classList.remove('flipping');
        scndCard.classList.remove('flipping');
        stickBoard = false;
    }, 900);
}


flipCards.forEach(tile => tile.addEventListener('click', createFlip));












