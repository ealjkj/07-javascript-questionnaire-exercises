const styleElement = document.createElement('style');

// This will happen before the DOM even start loading
document.head.appendChild(styleElement);
styleElement.appendChild(document.createTextNode(`
p:nth-child(even) {
    visibility: hidden;
}
`));

// This will happen after
addEventListener('DOMContentLoaded', e => {
    const elementsForToggle = document.querySelectorAll('p:nth-child(odd)')
    const elementsToToggle = document.querySelectorAll('p:nth-child(even)')
    elementsForToggle.forEach((element, key) => {
        elementsForToggle[key].addEventListener('click', e => {
            for(let i = 0; i < elementsToToggle.length; i++){
                elementsToToggle[i].style.visibility = (key === i) ? 'visible': 'hidden';
            }
        });    
    })
})
