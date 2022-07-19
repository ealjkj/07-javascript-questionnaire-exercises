const tbody = document.querySelector('tbody');
const ageCell = document.querySelector('tr:first-child td:nth-child(2)');
const rows = document.querySelectorAll('tr:not(tr:first-child)');
const ages = Array.from(rows).map((value, index) => {
    return [value.querySelector('td:last-child').textContent, index];
});

let currentOrder = 'none';
const memo = {};


ageCell.addEventListener('click', function orderTable(e) {
    let compare;
    console.log(currentOrder);
    if (currentOrder === 'none') {
        currentOrder = 'ascending';
        compare = ([a,i], [b,j]) => a - b;

    }
    else if (currentOrder === 'ascending') {
        currentOrder = 'descending';
        compare = ([a,i], [b,j]) => b - a;
    }
    else {
        currentOrder = 'none';
        compare = ([a,i], [b,j]) => i - j;
    }

    const fragment = new DocumentFragment();
    // remove elements
    rows.forEach(value => {
        tbody.removeChild(value);
    });

    // sort array and save in memo;
    if(memo[currentOrder]) sortedIndexes = memo[currentOrder];
    else {
        sortedIndexes = ages.sort(compare).map(v => v[1]);
        memo[currentOrder] = sortedIndexes;
    } 

    //Insert elements
    sortedIndexes.forEach( i => {
        fragment.appendChild(rows[i]);
    });
    tbody.appendChild(fragment)

});