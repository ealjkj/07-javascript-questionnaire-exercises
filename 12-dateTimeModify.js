function modifyDate() {
    Date.newProp = 'I added a prop';
    Date.newMetod = function() {
        return this.newProp + ' and a new method';
    };
    Date.prototype.getDayAndMonth = function() {
        return [this.getDay(), this.getMonth()];
    }
    Date.prototype.getHours = function() {
        return 'now the getHours method is not working! I overwrited it';
    }
}

modifyDate();
console.log(Date.newProp);
console.log(Date.newMetod());
console.log(new Date().getDayAndMonth());
console.log(new Date().getHours());