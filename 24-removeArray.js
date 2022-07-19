function remove(arr, el) {
    let id = arr.indexOf(el);
    if(id !== -1) arr.splice(id, 1);
    return arr;
}

let arr = [3,'hi', {'one': 1}, [3,1]];
console.log(remove(arr, 'hi'));