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
    const li = document.createElement("li");
    const text = document.createTextNode(txtTask.value);
    li.appendChild(text);

    const btn = document.createElement('button');
    btn.textContent = "Done";
    btn.addEventListener("click",() => {
      li.classList.toggle('list');
    })

    li.appendChild(btn);

    todoList.appendChild(li);

    txtTask.value = "";

  }else{
    warningText.innerHTML = "* Required";
  }
});
