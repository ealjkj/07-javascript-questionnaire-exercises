function moveZeroes(array) {
    let j = 0;
    for(let i = 0; i < array.length; i++){
        while(array[j] === 0 && j < array.length) {
            j++
        }
        array[i] = j < array.length? array[j] : 0;
        j++;
    }
}



const arr = [2,0,4,5,0,2,0,0,3];
moveZeroes(arr);





// function moveZeroes(array) {
//     let i = 0;
//     const numOfZeroes = array.filter(value => value === 0).length;

//     while (i < array.length - numOfZeroes) {
//         if(array[i] === 0) {
//             array = [...array.slice(0, i), ...array.slice(i+1, array.length), 0];
//         } else { 
//             i++ 
//         }
        
//     }
//     return array;
// }
console.log(arr);