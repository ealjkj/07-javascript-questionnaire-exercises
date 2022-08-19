const elementsForToggle = document.querySelectorAll('p:nth-child(odd)')
const elementsToToggle = document.querySelectorAll('p:nth-child(even)')

document.body.addEventListener('click', e => {
    const btn = e.target.closest('p:nth-child(odd)');

    if(btn) {
        let newState = btn.nextElementSibling.style.visibility === 'visible' ? 'hidden' : 'visible';
        elementsToToggle.forEach(element => {element.style.visibility = 'hidden'});
        btn.nextElementSibling.style.visibility = newState;
    }
})