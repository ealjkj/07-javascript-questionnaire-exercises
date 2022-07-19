console.log([] + []); // ''
console.log({} + []); // '[object Object]'
console.log([] + {}); // '[object Object]'
console.log({} + {}); // '[object Object][object Object]'



console.log([] + [] === ''); // ''
console.log({} + [] === 0); // '[object Object]'
console.log([] + {} === '[object Object]'); // '[object Object]'
console.log({} + {} === '[object Object][object Object]'); // '[object Object][object Object]'

