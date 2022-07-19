String.prototype.reverse = function () {
    let reversed = '';
    for(c of this) {
        reversed = c + reversed;
    }    
    return reversed;
}

String.prototype.reverseWords = function () {
    return this.split(' ').map(word => word.reverse()).join(' ');
}

console.log('hello world'.reverse());
console.log('hello world'.reverseWords());
