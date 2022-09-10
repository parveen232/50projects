const panels = document.querySelectorAll('.panel');

for (let panel of panels) {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        //we are adding active class to every that we click, so here's removeActiveClasses function   
    })
}

function removeActiveClasses() {
    for (let panel of panels) {
        panel.classList.remove('active');
    }
}
