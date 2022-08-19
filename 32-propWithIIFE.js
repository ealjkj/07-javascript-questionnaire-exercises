function myLog() {
    return {
        bar: 'bar',
        foo: 'foo',
        prop: function () {
            var self = this;
            console.log(self.bar);
            console.log(this.foo);
            (function() {
              console.log(self.bar);
              console.log(this.foo);
            })();
        }
    };
}
 
var obj = myLog();
obj.prop();


// Explanation:

// myLog() returns an object with the property prop being a function. Which is not called until the moment  obj.prop() is executed. When  obj.prop() is called, this becomes obj because that was at the left of the dot.  Then obj is assigned to self via  var self = this. After that console.log(self.bar) logs ‘bar’ and console.log(this.foo) ‘foo’ as expected. Finally a function is immediately called, where another execution context starts, and this becomes  gloabalThis then console.log(self.bar) logs ‘bar’ and console.log(this.foo) logs undefined since there is no  foo variable defined in the  gloabalThis. 