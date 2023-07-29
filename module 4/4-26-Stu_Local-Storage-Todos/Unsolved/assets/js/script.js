var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

//processes and displays information regards todo items
function renderTodos() {
  //resets inner HTML of todo list, and sets the todo count to the number of items in the array containing todo items
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  //creates and displays a list item for each todo item
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

//load and render any already-existing todo items from local storage
function init() {
  //retrieve any already-existing todo items from local storage, converting them back from a JSON string to their original form
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  //if there are todo items in local storage, set the todo list to the local storage content
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  //updates todo list now that local storage data has been retrieved
  renderTodos();
}

function storeTodos() {
  //stores todo list data as a JSON string in local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
//code runs when the user submits a todo item
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  //exits function if the user did not input anything to submit
  if (todoText === "") {
    return;
  }
  //adds todo item to todo list array, and resets input box
  todos.push(todoText);
  todoInput.value = "";
 
  //updated todo list data is sent to local storage, and new todo list item is visually rendered to the page
  storeTodos();
  renderTodos();
});

//code runs when the user clicks on the todo list box
todoList.addEventListener("click", function(event) {
  var element = event.target;
  //checks if the element the user clicked on was the "complete" button for a todo item; if so, remove that item from the list
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    //updated todo list data is sent to local storage, and new todo list item is visually rendered to the page
    storeTodos();
    renderTodos();
  }
});

init();
