function intersection(arr1, arr2) {
    const ans = [];
    for(let el of arr1) {
        if(arr2.includes(el)){
            ans.push(el);
        }
    }
    return ans;
}

let test1 = intersection([2, 3, 5, 3], [3, 4, 3, 5, 3, 6, 8]);
console.log(test1)