class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.name} ${this.lastName}`
    }

    makeGetRequest() {
        return fetch('http://example.com/movies.json?' + new URLSearchParams({
            name: this.name,
            lastName: this.lastName
        })); // it returns a promise.
    }
}

class Medic extends Person {
    constructor(name, lastName, speciality) {
        super(name, lastName);
        this.speciality = speciality;
    }
}

// I don't really know if this is a proper AJAX request
const person = new Person('Ash', 'Ketchup');
console.log(person.fullName());
person.makeGetRequest('.', function getCb(request) {
    return ()=> {
        console.log(request.responseText);
    }
});