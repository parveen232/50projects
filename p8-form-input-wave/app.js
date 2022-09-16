const labels = document.querySelectorAll('.form-control label')

for (let label of labels) {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span
        style = "transition-delay: ${index * 50}ms">${letter}</span>`)
        .join('');
}