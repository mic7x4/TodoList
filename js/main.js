// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Events
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

// Functions
function addTodo(event){
    event.preventDefault();

    // Creating to do Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    // Create li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    // Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);
    
    // Clear to do input
    todoInput.value = '';

}

// Delete & Check Funtion

function deleteCheck(event){
    const item =  event.target;
    // Delete to item
    if(item.classList[0]==='trash-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
    }
    // Check mark
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        console.log(todo)
        todo.classList.toggle('completed');
    }
}