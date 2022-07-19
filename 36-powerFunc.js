function myPowerFn(n) {
    return exponent => n**exponent;
}

var n = myPowerFn(3);
console.log(n(2)); 