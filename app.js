const userInput = document.querySelector("#input");
const addBtn = document.getElementById("button");
const parentTodoContainer = document.getElementById("todolist");

let listOfTodos = [];

addBtn.onclick = () => {
listOfTodos.push(userInput.value);

userInput.value = ""

displayTodo();
};

function displayTodo () {
    let newTodo = "";

    listOfTodos.map((todo, index) => {
        newTodo += `<li>
        ${todo}
        <a onclick="editTodo(${index})">Edit</a>
        <a onclick="deleteTodo(${index})">Delete |</a>
        </li>`;
    });
    parentTodoContainer.innerHTML  = newTodo;
};

function deleteTodo(indexValue){
    listOfTodos.splice(indexValue, 1);
    displayTodo();
}

function editTodo(indexValue){;
    let updatedTodo = prompt("Please update the todo");
    listOfTodos.splice(indexValue, 1, updatedTodo);
    displayTodo();
}