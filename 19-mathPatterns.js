String.prototype.matchPattern = function(pattern, caseInsensitive = false) {
    if(caseInsensitive) {
        pattern = pattern.toLowerCase();
        string = this.toLowerCase();
    } else string = this;

    for(let i = 0; i < string.length - pattern.length; i++) {
        let stillMatches = true;
        for(let j = 0; j < pattern.length; j++) {
            stillMatches = stillMatches && (pattern[j] === '*' || pattern[j] === string[i+j]);
            if(!stillMatches) break;
        }
        if(stillMatches) return this.slice(i, pattern.length + i);
    }    
    return -1; 
}


str = "I can code with python and javascript in a CICD model";
pattern = "c*c*";
console.log(str.matchPattern(pattern, true));