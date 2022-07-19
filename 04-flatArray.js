function flat(array) {
    if (array.length === 0) return [];
    if (array.length === 1) {
        if(Array.isArray(array[0])) return flat(array[0]);
        else return array;
    } 
    else {
        return [...flat([array[0]]), ...flat(array.slice(1, array.length))];
    }
}

console.log(flat([]));
console.log(flat([4]));
console.log(flat([[1]]));
console.log(flat([1,2]));
console.log(flat([1,2,3,[4,5,[6,7]], 8,9]));

