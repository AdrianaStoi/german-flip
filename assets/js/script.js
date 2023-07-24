
// Function and click event for creating flip card 
let flipCards = document.querySelectorAll('.flip-cards');

function createFlip() {
    this.classList.toggle('flipping');
}

flipCards.forEach(tile => tile.addEventListener('click', createFlip));

