const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // console.log(window.innerHeight);
    // console.log(window.innerHeight / 5 * 4);  //this gonna be our trigger point
    const triggerBottom = window.innerHeight / 5 * 4;

    for (box of boxes) {
        const boxTop = box.getBoundingClientRect().top;  //mdn

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    }
}

checkBoxes(); //if not called, initially not show boxes...

//for more - anmimate on scroll library
