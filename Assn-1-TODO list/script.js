const newtaskinput = document.querySelector("#new-task input");
const taskDiv = document.querySelector("#tasks");

let deletetasks, edittasks, tasks;
let updateNote;
let count;

//function load
window.onload = () => {
  updateNote = "";
  count = Object.keys(localStorage).length;
  displayTasks();
};
//display tasks

const displayTasks = () => {
  if (Object.keys(localStorage).length > 0) {
    taskDiv.style.display = "inline-block";
  } else {
    taskDiv.style.display = "none";
  }
  //clear the tasks

  taskDiv.innerHTML = "";
  //fetch keys all
  let tasks = Object.keys(localStorage);
  tasks = tasks.sort();
  for (let key of tasks) {
    let classValue = "";

    //get all value
    let value = localStorage.getItem(key);
    let taskinnerdiv = document.createElement("div");
    taskinnerdiv.classList.add("task");
    taskinnerdiv.setAttribute("id", key);
    taskinnerdiv.innerHTML += `<span id="taskname">${key.split("_")[1]}</span>`;
    let editbutton = document.createElement("button");
    editbutton.classList.add("edit");
    editbutton.innerHTML = `<i class="bi bi-pencil-square"></i>`;
    if (!JSON.parse(value)) {
      editbutton.style.visibility = "visible";
    } else {
      editbutton.style.visibility = "hidden";
      taskinnerdiv.classList.add("completed");
    }
    taskinnerdiv.appendChild(editbutton);
    taskinnerdiv.innerHTML += `<button class="delete"><i class="bi bi-trash-fill"></i></button>`;
    taskDiv.appendChild(taskinnerdiv);
  }
  //taskcompleted
  tasks = document.querySelectorAll(".task");
  tasks.forEach((element, index) => {
    element.onclick = () => {
      if (element.classList.contains("completed")) {
        updatestorage(element.id.split("_")[0], element.innerText, false);
      } else {
        updatestorage(element.id.split("_")[0], element.innerText, true);
      }
    };
  });
  //edittasks
  edittasks = document.getElementsByClassName("edit");
  Array.from(edittasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      disableButtons(true);
      let parent = element.parentElement;
      newtaskinput.value = parent.querySelector("#taskname").innerText;
      updateNote = parent.id;
      parent.remove();
    });
  });

  deletetasks = document.getElementsByClassName("delete");
  Array.from(deletetasks).forEach((element, index) => {
    element.addEventListener("click", (e) => {
      e.stopPropagation();
      let parent = element.parentElement;
      removetask(parent.id);
      parent.remove();
      count -= 1;
    });
  });
};
//disable edit

const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};
//remove task local storage

const removetask = (taskvalue) => {
  localStorage.removeItem(taskvalue);
  displayTasks();
};
//add tasks to LS
const updatestorage = (index, taskValue, completed) => {
  localStorage.setItem(`${index}_${taskValue}`, completed);
  displayTasks();
};
//add new task
document.querySelector("#push").addEventListener("click", () => {
  disableButtons(false);
  if (newtaskinput.value.length == 0) {
    alert("Please Enter a Task");
  } else {
    if (updateNote == "") {
      updatestorage(count, newtaskinput.value, false);
    } else {
      let existingcount = updateNote.split("_")[0];
      removetask(updateNote);
      updatestorage(existingcount, newtaskinput.value, false);
      updateNote = "";
    }
    count += 1;
    newtaskinput.value = "";
  }
});
