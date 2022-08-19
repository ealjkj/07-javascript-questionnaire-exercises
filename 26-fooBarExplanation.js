function foo1(){
   var fn = function(){
      console.log(this.foo);
   };
   return { foo:'bar' };
} // Here we define foo1, which will just return the object {foo: 'bar'}.
  
function foo2(){ 
   var fn = function(){
      console.log(this.foo); 
   };
   return { foo:'baz' };
} // Here we define foo2, which will just return the object {foo: 'baz'}.

 
console.log(foo1()); // This will log in the console, the object returned by calling the function foo1. That is {foo: 'bar'}

console.log(foo2()); // This will log in the console, the object returned by calling the function foo2. That is {foo: 'baz}.


//Therefore the console will print:
//{ foo: 'bar' }
//{ foo: 'baz' }



// Explanation:

// fn never gets called in foo1 nor foo2 therefore nothing should be loggedd for that matter. Then, the only thing that will be logged are the objects { foo:'bar' }  followed by { foo:'baz' }
