Array.prototype.duplicate = function () {
    return [...this, ...this];
}


console.log([1,2,3,4].duplicate());