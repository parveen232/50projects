const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    createTags(e.target.value);
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