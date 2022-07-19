Date.prototype.nextDayDate = function() {
    return new Date(this.getTime() + 24*60*60*1000);
}

const today = new Date();
console.log(today);

const tomorrow = today.nextDayDate();
console.log(tomorrow);