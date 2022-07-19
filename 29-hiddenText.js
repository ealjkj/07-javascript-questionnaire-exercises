const styleElement = document.createElement('style');

// This will happen before the DOM even start loading
document.head.appendChild(styleElement);
styleElement.appendChild(document.createTextNode(`
div:first-child {
    visibility: hidden;
}
`));

// This will happen after
addEventListener('DOMContentLoaded', e => {
    const showLink = document.getElementById('id1');
    const text = document.getElementsByTagName('div')[0];
    
    showLink.addEventListener('click', e => {
        text.style.visibility = 'visible';
    });
})
