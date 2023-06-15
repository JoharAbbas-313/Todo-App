
var todoInput = document.getElementById('todo-input');
var addButton = document.getElementById('add-button');
var todoList = document.getElementById('todo-list');

function addTodo() {
  var todoText = todoInput.value;
  
  if (todoText.trim() === '') {
    return;
  }
  
  var li = document.createElement('li');
  li.innerText = todoText;
  
  var deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete-button';
  
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
  
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  
  todoInput.value = '';
}

addButton.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
}
});