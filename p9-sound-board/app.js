const sounds = document.querySelectorAll('audio');

for (let sound of sounds) {
    let soundId = sound.id;
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = soundId;

    btn.addEventListener('click', () => {
        stopAudio();
        document.getElementById(soundId).play();
        // document.querySelector('#soundId').play(); not work, i think it's string inside ''
        // document.querySelector('#' + soundId).play(); it will work
        // for play one sound at a time if we click another/multiple button -> stopAudio();
    })

    document.querySelector('#buttons').appendChild(btn);
}

function stopAudio() {
    for (let sound of sounds) {
        const audio = document.getElementById(sound.id);
        audio.pause();
        audio.currentTime = 0;
    }
}