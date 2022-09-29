const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    // console.log('drag Start');
    this.className += ' hold';
    // this.className = 'invisible';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    // console.log('drag End');
    this.className = 'fill';
}

// dragover and dragenter have a default action
function dragOver(e) {
    // console.log('drag Over');
    e.preventDefault();
}

function dragEnter(e) {
    // console.log('drag Enter');
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    // console.log('drag Leave');
    this.className = 'empty';
}

function dragDrop() {
    // console.log('drag Drop');
    // make sure div has class empty before/when dropping img
    this.className = 'empty';
    this.append(fill);
    //set preventDefault on dragover and dragenter
}