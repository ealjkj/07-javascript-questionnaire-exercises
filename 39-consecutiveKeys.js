let v = document.getElementById('validation-input').value;
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
validationInput.addEventListener('keyup', ({target}) => {
    if(containsConsecutiveCharacters(target.value)) {
        target.value = v;
    }
    v = target.value;
});


function containsConsecutiveCharacters(str) {
    return str.split("").some((value, index, arr) => {
        const test = [a,b,c,d] = arr.slice(index, index + 4).map(v => v.toUpperCase());

        // Check if all characters are in layout
        if(indexes[a] === undefined || indexes[b] === undefined || indexes[c] === undefined || indexes[d] === undefined) return false;

        // Verify they all belong to the same line on the keyboard
        const keyPositions = test.map(v => indexes[v]);
        const sameLine = keyPositions.reduce((current,[line, i]) => current && line === keyPositions[0][0], true);

        // check if they are consecutives
        const minIndex = Math.min(...keyPositions.map(([l, index]) => index));
        const testString = keyPositions.map(([l, index]) => index-minIndex).reduce((current, v) => current + v.toString(), "");

        return sameLine && (testString === "0123" || testString === "3210");
    });
}