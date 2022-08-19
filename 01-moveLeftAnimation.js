const item = document.getElementById('item');

function moveLeftAnimation(item, pixels, duration = 1) {
    const fps = 60;
    const totalFrames = duration*fps;
    let frameCounter = 0;
    // find current translateX
    let translateX = Number(getComputedStyle(item)['transform'].split(',')[4]);

    const interval = setInterval(() => {
        if(frameCounter++ < totalFrames) {
            translateX -= pixels/totalFrames;
            item.style.transform = `translateX(${translateX}px)`;
        } else {
            clearInterval(interval);
        }
    }, 1000/fps)
}

item.addEventListener('click', e => moveLeftAnimation(item, 60, 0.3));


