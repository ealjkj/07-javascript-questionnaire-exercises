const btn = document.getElementById('btn');
const div = document.getElementById('colorChanger');
btn.addEventListener('click', e => {
    let randomColor = '#' + Math.round(255*255*255*Math.random()).toString(16);
    div.style.backgroundColor = randomColor;
});

