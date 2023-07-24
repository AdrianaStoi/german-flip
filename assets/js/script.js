

let flipCards = document.querySelectorAll('.flip-cards');
// variables for checking card match
let frstCard, scndCard;
let flippedCard = false;

// Function and click event for creating flip card 
function createFlip() {
    this.classList.add('flipping');

    if (!flippedCard) {
        flippedCard = true;
        frstCard;.this;
    }
}

flipCards.forEach(tile => tile.addEventListener('click', createFlip));


//Function check match 










