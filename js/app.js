let blenderSwitch = 'off';
const blenderr = document.querySelector('.blender');
const btnAudio = document.querySelector('.btn-audio');
const blenderAudio = document.querySelector('.blender-audio');

function blender() {
    if(blenderSwitch === 'off'){
        blenderSwitch = 'on';
        blenderr.classList.add('blender-on');
        sounds();
    } else {
        blenderSwitch = 'off';
        blenderr.classList.remove('blender-on');
        sounds();
    }
}

function sounds() {
    if(blenderAudio.paused) {
        btnAudio.play();
        blenderAudio.play();
    } else {
        btnAudio.play();
        blenderAudio.pause();
        blenderAudio.currentTime = 0;
    }
}