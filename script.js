var newTask = document.querySelector("#new-task");
var addTaskBtn = document.querySelector("#addTask");

var toDoUl = document.querySelector(".todo-list ul");
var completeUl = document.querySelector(".complete-list ul");

var createNewTask = function (task) {
  // console.log("Creating task...");

  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");

  label.innerText = task;

  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

var input = document.getElementById("new-task");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addTask").click();
  }
});

function EnterPress() {
  // console.log("Adding task...");
  if (newTask.value == 0) {
    alert("Unesite task");
  } else {
    var listItem = createNewTask(newTask.value);
    toDoUl.appendChild(listItem);
    newTask.value = "";
    bindIncompleteItems(listItem, completeTask);
  }
}

var completeTask = function () {
  var listItem = this.parentNode;

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  completeUl.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
};

var deleteTask = function () {
  // console.log("Deleting task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
};

var bindIncompleteItems = function (taskItem, checkBoxClick) {
  // console.log("Binding the incomplete list...");

  var checkBox = taskItem.querySelector("input[type=checkbox]");

  checkBox.onchange = checkBoxClick;
};

var bindCompleteItems = function (taskItem, deleteButtonPress) {
  // console.log("Binding the complete list...");

  var deleteButton = taskItem.querySelector(".delete");

  deleteButton.onclick = deleteButtonPress;
};

for (var i = 0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (var i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);
