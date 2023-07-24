

let flipCards = document.querySelectorAll('.flip-cards');
// variables for checking card match
let frstCard, scndCard;
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

function matchCheck(); {
    let whenMatch = frstCard.dataset.imagecard === scndCard.dataset.imagecard;

    if (whenMatch) {
        activateMatch();
    } else {
        revertCards();
    }
}





flipCards.forEach(tile => tile.addEventListener('click', createFlip));


//Function check match 










