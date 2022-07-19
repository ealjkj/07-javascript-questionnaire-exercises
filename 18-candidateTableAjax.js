let table = document.getElementById('info-table');
const addFormTemplate = document.getElementById('add-form-template').content;
const tableHeader = document.getElementById('table-header').content;
const personRow = document.getElementById('person-row').content;
const saveCancel = document.getElementById('save-cancel-cell').content;
let cache = [];
let addPressed= false;

// GET REQUEST
fetch("./18-candidateTableAjax.json").then(response => response.json())
    .then(json => displayTable(json.people));



function displayTable(people) {
    cache = people;
    table = document.createElement('table');
    document.body.appendChild(table)
    table.setAttribute('id', 'info-table');
    
    const fragment = new DocumentFragment();
    fragment.appendChild(tableHeader.cloneNode(true));
    for(let person of people) {
        fragment.appendChild(createRow(person));
    }
    table.appendChild(fragment);

    const addLink = document.getElementById('add-link');
    // Events
    addLink.addEventListener('click', e => {
        if(addPressed) return;
        addPressed = true;
        table.insertBefore(addFormTemplate.cloneNode(true), table.children[1]);
        const addForm = document.getElementById('add-form');

        addForm.querySelector('#submit-btn').addEventListener('click', e => {
            // POST METHOD
            const response = fetch("www.example.com", {
                method: "POST",
                body: JSON.stringify({
                    name: document.getElementById('first-name').value,
                    lastName: document.getElementById('last-name').value,
                    phone: document.getElementById('phone').value,
                })
            });
            response.then(data => data.json()).then(json => displayTable(json.people));


            table.removeChild(addForm);
            addPressed = false;
        });
    
    });


    table.addEventListener('click', e => {
        const editBtn = e.target.closest('.edit-btn');
        const deleteBtn = e.target.closest('.delete-btn');
        const row = e.target.closest('tr');
        if(editBtn) {
            const buttonsCell = e.target.closest('.buttons');
            const newButtonsCell = saveCancel.cloneNode(true);

            for(let cell of row.children) {
                cell.setAttribute("contenteditable", "true");
            }
            row.children[0].focus();
            row.removeChild(buttonsCell);
            row.appendChild(newButtonsCell);    

            row.querySelector('.save-btn').addEventListener('click', e => {
                // PUT request //
                const response = fetch("www.example.com", {
                    method: "PUT",
                    body: JSON.stringify({
                        _id: row.dataset.id,
                        name: document.getElementById('first-name').value,
                        lastName: document.getElementById('last-name').value,
                        phone: document.getElementById('phone').value,
                    })
                });
                response.then(data => data.json()).then(json => displayTable(json.people));

                document.body.removeChild(table);
            });
            row.querySelector('.cancel-btn').addEventListener('click', e => {   
                document.body.removeChild(table);
                displayTable(cache);
            });
        }

        if(deleteBtn) {
            document.body.removeChild(table);
            const response = fetch("www.example.com", {
                    method: "DELETE",
                    body: JSON.stringify({_id: row.dataset.id})
                });
                response.then(data => data.json()).then(json => displayTable(json.people));
        }
    });
};

function createRow({_id, name, lastName, phone}) {
    const row = personRow.cloneNode(true);
    row.querySelector('tr').setAttribute('data-id', _id);
    row.querySelector(".first-name").textContent = name;
    row.querySelector(".last-name").textContent = lastName;
    row.querySelector(".phone").textContent = phone;
    return row;
}
