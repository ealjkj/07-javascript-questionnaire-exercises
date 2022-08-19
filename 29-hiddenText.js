const showLink = document.getElementById('id1');
const text = document.getElementsByTagName('div')[0];

showLink.addEventListener('click', e => {
    text.style.visibility = 'visible';
});