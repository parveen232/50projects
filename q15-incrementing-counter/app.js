const counters = document.querySelectorAll('.counter');

for (let counter of counters) {
    counter.innerText = '0';

    const updateCounter = () => {
        // const target = counter.getAttribute('data-target');
        // console.log(typeof target, target);  // string ----
        // + sign turn into a number, we can also user parseInt or Number()
        const target = +counter.getAttribute('data-target');
        // console.log(typeof target, target);  // number ----
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }

    updateCounter();
}