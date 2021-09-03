//Selectors
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-button");
const listTodo = document.querySelector(".list-container");

//Event Listeners
addBtn.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    document.getElementById('list-container').style.backgroundColor = 'white';
    event.preventDefault();    //Prevent Default form from submitting

    const todo = document.createElement('form');
    todo.className = "task-div";

    const todoRadio = document.createElement('input');
    todoRadio.type = 'checkbox';
    todoRadio.id = 'todoRadio';

    const customCheck = document.createElement('span');
    customCheck.className = 'customCheck';
    customCheck.id = 'customCheck';
    customCheck.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>';

    const inputValue = todoInput.value;
    var label = document.createElement('label')
    label.htmlFor = 'todoRadio';
    label.className = 'labelRadio';
    label.innerText = `${inputValue}`;
    todoInput.value = '';

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>';
    deleteBtn.className = 'btnDelete';

    todo.appendChild(customCheck);
    todo.appendChild(todoRadio);
    todo.appendChild(label);
    todo.appendChild(deleteBtn);
    listTodo.appendChild(todo);

    //EventListener for delete button
    deleteTask(deleteBtn);
    colorCustomCheck(todoRadio);
}

function colorCustomCheck(check) {
    const sibling = check.nextElementSibling;
    sibling.className+= " completed"
    check.addEventListener("change", (event) => {
        if(check.checked) 
            document.getElementById('customCheck').style.background = 'hsl(280, 87%, 65%)';
        else 
            document.getElementById('customCheck').style.backgroundColor = 'white';
    });
}

function deleteTask(btn) {
    btn.addEventListener("click",(event) => {
        event.preventDefault();
        const parent = btn.parentElement;
        setTimeout(() => parent.remove() , 400);      
    })
}