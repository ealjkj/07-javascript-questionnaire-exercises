function log(v){
    if(v){ console.log('ok');}
    else{ console.log('no'); }
}


const testValues = [true, false, 'true', 'false', {}, [], NaN, 0, 1, undefined, null];

for(let value of testValues) {
    log(value);
}