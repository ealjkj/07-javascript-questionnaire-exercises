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

const secondInfo = document.getElementsByClassName('info')[1];

// FIRST NAME
secondInfo.firstChild.textContent = candidate.name.firstname; 
secondInfo.lastChild.textContent = candidate.printName(); 