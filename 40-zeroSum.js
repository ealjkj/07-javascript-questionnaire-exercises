function findZeroSums(arr) {
    // making counters for positives, negatives and zeros.
    const positives = new Map();    
    const negatives = new Map();
    let numOfZeros = 0;
    

    // counting how many instances of each number the array has.
    for(let number of arr) {
        if(number > 0) {
            if(!positives.has(number)) positives.set(number, 1);
            else positives.set(number, positives.get(number) + 1);
        }
        else if(number < 0) {
            if(!negatives.has(number)) negatives.set(number, 1);
            else negatives.set(number, negatives.get(number) + 1);
        }
        else numOfZeros += 1
    }



    let ans = [];
    // positive + positive + negative
    for(let first of positives.keys()) {
        for(let second of positives.keys()) {
            if(first === second && positives.get(first) === 1) continue;
            let missingValue = 0 - first - second;
            if(negatives.has(missingValue)) {
                ans.push([first, second, missingValue]);
            }
        }

        // positive + zero + negative
        if(numOfZeros > 0 && negatives.has(-first)) ans.push([first, 0, -first]);
    }

    // negative + negative + negative
    for(let first of negatives.keys()) {
        for(let second of negatives.keys()) {
            if(first === second && negatives.get(first) === 1) continue;
            let missingValue = 0 - first - second;
            if(positives.has(missingValue)) ans.push([first, second, missingValue]);
        }
    }

    // zero + zero + zero
    if(numOfZeros >= 3) ans.push([0,0,0]);
    
    return ans;
}   







console.log(findZeroSums([3,2,1,0,-3,2,2,-2]));