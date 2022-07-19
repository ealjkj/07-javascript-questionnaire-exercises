function foo1(){
    var fn = function(){
       console.log(this.foo);
    };
    return { foo:'bar' };
  }
  
 function foo2(){ 
    var fn = function(){
        console.log(this.foo); 
    };
    return { foo:'baz' };
 }
 
 console.log(foo1());
 console.log(foo2());