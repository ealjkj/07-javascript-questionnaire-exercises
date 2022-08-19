var candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName() {
        return `${this.name.firstname} ${this.name.lastname}`;
    }
}

// -------------- workflow ----------------------
// I could just use an ID, but in order to not modify the markup, I will use querySelector.

const main = document.getElementById('body');
const secondInfo = main.querySelector('.info');

// FIRST NAME
secondInfo.firstChild.textContent = candidate.name.firstname; 
secondInfo.lastChild.textContent = candidate.printName(); 