const txtTask = document.getElementById("txtTask");
const addBtn = document.getElementById("btnAdd");
const todoList = document.getElementById("todoList");
const warningText = document.getElementById("txtWarning");

txtTask.onkeyup = () => {
  if (txtTask.value == "") {
    warningText.innerHTML = "* Required";
  } else {
    warningText.innerHTML = "";
  }
};

addBtn.addEventListener("click", function () {
  if (txtTask.value != "") {
    let li = document.createElement("li");
    li.textContent = txtTask.value;

    todoList.appendChild(li);
    txtTask.value = "";
  }
});
