function *numberGenerator(min, max) {
    const values = Array(max - min).fill(1).map((v,i) => i + min);
    while (values.length !== 0) {
        let idx = Math.round(Math.random()*(values.length-1));
        yield values.splice(idx, 1)[0];
    }
}



const gen = numberGenerator(4, 9);
for(let x of gen){
    console.log(x);
}

