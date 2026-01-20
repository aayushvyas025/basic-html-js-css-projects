document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById('todoInput'); 
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoItem = document.getElementById('todoList'); 

    console.log(todoInput, todoItem, addTodoBtn);
     todoInput.addEventListener('keypress', function(event) { 
        if(event.key === 'Enter') { 
            addTodo()
        }

     });

     function addTodo() {
        const todoText = todoInput.value.trim(); 
        if(todoText !== '') {
            const liElement = document.createElement('li'); 
            liElement.textContent = todoText; 
            todoItem.appendChild(liElement);
            todoInput.value = ''
        }
     }

    addTodoBtn.addEventListener('click', addTodo);
})