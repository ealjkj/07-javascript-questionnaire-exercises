function findZeroSums(arr) {
    const ans = [];
    arr.sort((a,b) =>  a - b)
    for(let i = 0; i<= arr.length-2; i++ ) {
        let a = arr[i];
        let start = i + 1;
        let end = arr.length - 1;

        while (start < end) {
            let b = arr[start];
            let c = arr[end];
            if(a+b+c === 0) {
                if(!ans.some(([a2, b2, c2]) => a2 === a && b2 === b && c2 === c)){
                    ans.push([a,b,c]);
                }
                start += 1;
                end -= 1;
            } 
            else if(a + b + c > 0) {
                end -= 1;
            }
            else {
                start += 1;
            }

        }
    }
    return ans;
}

// console.log(findZeroSums([3,2,1,0,-3,2,2,-2]));
console.log(findZeroSums([-1,0,1,2,-1,-4,-2,-3,3,0,4]));

// -4,-3,-2,-1,-1,0,0,1,2,3,4