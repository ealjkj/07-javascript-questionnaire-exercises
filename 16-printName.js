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


console.log(candidate.printName());