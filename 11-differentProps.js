function differentProps(obj1, obj2) {
    let ans = new Set();
    for(let prop in obj1) {
        if(obj2[prop] !== obj1[prop]) ans.add(prop); 
    }
    for(let prop in obj2) {
        if(obj2[prop] !== obj1[prop]) ans.add(prop); 
    }
    return Array.from(ans);
}

let obj1 = {
    prop1: 1,
    prop2: 'hi',
    prop4: [],
    prop5: 5
}

let obj2 = {
    prop1: 1,
    prop2: 'hello',
    prop3: {},
    prop5: 5
}

console.log(differentProps(obj1, obj2)); 