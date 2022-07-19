// var foo = "hello";
// (function () { 
//    var bar = "World";
//    alert( foo + bar); 
// })();
// alert( foo + bar);

// if( [] ) console.log("array is true");
// if ([] == true) console.log("array == true");

// for(let i = 0; i < 5; ++i){
//     setTimeout(function(){
//          console.log("counter: ", i);
//     }, 100-i);
// }


var obj = {
    prop: {}
};
 
delete obj.prop;
console.log(obj.prop);