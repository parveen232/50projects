const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        randomSelect();
    }
})

function createTags(input) {
    //give an array of tags
    const tags = input
        .split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim());
    // console.log(tags);

    //let's put these tags into html
    tagsEl.innerHTML = '';

    for (let tag of tags) {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    }
}

function randomSelect() {
    const times = 30;

    // causing the shifting effect- highlighting and unhightling random tag
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    // takes care of stopping of shifting and pick a random tag and highlight it
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        })
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}