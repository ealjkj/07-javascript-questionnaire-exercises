let savedValue = document.getElementById('validation-input').value;
const keyboardLayout = [
    [["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"]],
    [..."QWERTYUIOP".split("").map(v => [v]), ["[", "{"], ["]", "}"], ["\\", "|"]],
    [..."ASDFGHJKL".split("").map(v => [v]), [":", ";"], [",", '"']],
    [..."ZXCVBNM".split("").map(v => [v]), [",", "<"], [".", ">"], ["/", "?"]]
];

const indexes = {};
for(let i = 0; i < keyboardLayout.length; i++) {
    let line = keyboardLayout[i];
    for(let j = 0; j < line.length; j++) {
        for(let key of line[j]) {
            indexes[key] = [i,j];
        }
    }
}

const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('input', ({target}) => {
    if(containsConsecutiveCharacters(target.value)) {
        target.value = savedValue;
    }
    savedValue = target.value;
});


function containsConsecutiveCharacters(str) {
    return str.split("").some((value, index, arr) => {
        // get 4 characters from the input
        const test = [a,b,c,d] = arr.slice(index, index + 4).map(v => v.toUpperCase());

        let inputHasFourConsecutive = false;
        for(let line of keyboardLayout) {
            const lineHasFourConsecutive = line.some((value, keyIndex) => {
                if(!line[keyIndex + 3]) {
                    return false
                } 

                return line[keyIndex].includes(a) 
                && line[keyIndex + 1].includes(b) 
                && line[keyIndex + 2].includes(c) 
                && line[keyIndex + 3].includes(d)
            })

            // Input will have Four consecutive characters on the keyboard if one of the lines contains four consecutive characters.
            inputHasFourConsecutive = inputHasFourConsecutive || lineHasFourConsecutive;
        }

        return inputHasFourConsecutive;
    });
}