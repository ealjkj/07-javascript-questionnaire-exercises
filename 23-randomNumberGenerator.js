function *sequenceGenerator(min, max) {
    const upperBound = max - min + 1; 
    const period = 2**(Math.floor(Math.log2(upperBound)) + 1); // m
    const traslation = 1; // c
    const multiplier = 5; // a

    let current = Math.floor(Math.random()*period); //X_0
    for(let i = 0; i < period; i++) {
        current = (multiplier*current + traslation) % period; // aX + c (mod m)
        if(current < upperBound) {
            yield current + min; 
        }
    }
}

// GENERATION EXAMPLE
const gen = sequenceGenerator(6, 47);
console.log([...gen])
