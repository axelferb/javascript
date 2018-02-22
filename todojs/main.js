// Adds 'const' to easily fetch specific with for example, getElementById or getElementsByTagName.
const button = document.getElementById("addTodo");
const input = document.getElementById("inputTodo");
const delButton = document.getElementsByClassName("delButton");
const completeButton = document.getElementsByClassName("completeButton");
const active = document.getElementById("activeTodos");
const completed = document.getElementById("completedTodos");
const listitems = document.getElementsByTagName("li");
const clearAll = document.getElementById("clear");
const todoItems = document.getElementsByClassName("todoitem");


button.addEventListener("click", function () {

    for (todoItem of todoItems) {
        if (input.value === todoItem.firstElementChild.innerText) {
            alert("Denna todo finns redan!");
            var todoExists = true;
        }
    }
    if (todoExists != true) {
        //Using let and `` to easily blend js and HTML in one var.
        var newTodo =
            `
            <li id="todo" class="todoitem">
            <p class="todoValue">${input.value}</p>
            <button class="completeButton" id="completeButton">
            ✔   
            </button>
            <button class="delButton" id="delButton">
            Delete
            </button>
            </li>
            `;

        // Adds a new Todo instead of replacing the old one.
        active.innerHTML += newTodo;
        loopMyButtons();
        loopMyCheckboxes();
    }
});

//Looping out all Deletebuttons aswell as the code for deleting a todo from the list once it is pressed.
//Looping to ensure all buttons are part of the DOM when something happens to them.
function loopMyButtons() {
    const deleteButtons = document.getElementsByClassName("delButton");
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", function () {
            this.parentElement.parentElement.removeChild(this.parentElement);
        });
    }
}

//Looping out all Completebuttons aswell as adding a new todo with the same value as the one it deletes when clicking the "completed" button and removing the "complete" button from the todoitem.
//Looping to ensure all buttons are part of the DOM when something happens to them.
function loopMyCheckboxes() {
    const completeButtons = document.getElementsByClassName("completeButton");
    for (const completeButton of completeButtons) {
        completeButton.addEventListener("click", function () {
            this.parentElement.parentElement.removeChild(this.parentElement);
            completed.appendChild(this.parentElement);
            completeButton.remove(this.completeButton);
        });
    }
}

//Removes all the todos, active and completed. Makes the length of listitems 0 when the button is pressed and removes all listitems.
clearAll.addEventListener("click", clearAllTodos);
function clearAllTodos() {
    for (var i = 0; i < listitems.length; i += 0) {
        listitems[i].remove();
    }
}
