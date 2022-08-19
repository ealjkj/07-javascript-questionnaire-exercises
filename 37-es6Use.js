String.prototype.exclamation = function () {
    return `${this}!`;
}

console.log("hello".exclamation());
console.log("hello world".exclamation());


// ----------------------

const add = (...args) => {
    return args.reduce((a,b) => a+b, 0);
}

console.log(add(2, 5) == 7);
console.log(add(7, 11) == 18);
console.log(add(12, 8, 5, 6) == 31);