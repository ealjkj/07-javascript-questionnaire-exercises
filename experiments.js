const p = fetch('experiments.json');
p.then(value => value.json()).then(data => console.log("Data:", data));

const errors = [];
p.catch(reason => errors.push(reason));

const waitForIt = new Promise((resolve, reject) => {
    let str = "legen";
    setTimeout(() => {
        str = str + "dary";
        resolve(str);
    }, 100)
});

console.log(waitForIt); // It logs a Promise object
waitForIt.then(console.log); // "legendary"