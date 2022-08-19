function flat(toFlat) {
    const flatten = [];

    function appendAll(arr) {
        if(!Array.isArray(arr)) {
            return flatten.push(arr)
        } 

        for(let element of arr) {
            appendAll(element)
        }
    }

    appendAll(toFlat);
    return flatten
}
console.log(flat([]));
console.log(flat([4]));
console.log(flat([[1]]));
console.log(flat([1,2]));
console.log(flat([1,2,3,[4,5,[6,7]], 8,9]));

