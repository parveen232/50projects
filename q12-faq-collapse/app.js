const toggles = document.querySelectorAll('.faq-toggle');

for (let toggle of toggles) {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
}


