String.prototype.matchPattern = function(pattern, caseInsensitive = false) {
    let string;
    if(caseInsensitive) {
        string = this.toLowerCase();
        pattern = pattern.toLowerCase();
    } else {
        string = this;
    };

    for(let i = 0; i < string.length - pattern.length + 1; i++) {
        let stillMatches = true;
        for(let j = 0; j < pattern.length; j++) {
            stillMatches = stillMatches && (pattern[j] === '*' || pattern[j] === string[i+j]);
            if(!stillMatches) break;
        }
        if(stillMatches) return this.slice(i, pattern.length + i);
    }    
    return null; 
}


const str = "aai";
const pattern = "ai";
console.log(str.matchPattern(pattern, true));