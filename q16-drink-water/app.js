const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
})

function highlightCups(idx) {
    // if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full'))....
    if (smallCups[idx].classList.contains('full') && !smallCups[idx + 1].classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        }
        else {
            cup.classList.remove('full');
        }
    })
}