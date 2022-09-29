const buttons = document.querySelectorAll('.ripple');

for (let button of buttons) {
    button.addEventListener('click', function (e) {
        // const x = e.clientX;
        // const y = e.clientY;
        // https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y

        const x = e.pageX;
        const y = e.pageY;
        // console.log(x, y);

        // for position of button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        // console.log(buttonTop, buttonLeft);

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        // console.log(xInside, yInside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // this -> doesn't work with arrow function
        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    })
}