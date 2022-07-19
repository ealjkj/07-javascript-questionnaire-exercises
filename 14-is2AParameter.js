function is2AParameter(...args) {
    return args.includes(2);
}

console.log(is2AParameter(1,5,6));
console.log(is2AParameter(1,2,6));
console.log(is2AParameter(2));
console.log(is2AParameter([1,2,3]));