
            //ELEMENTS//

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".todo-app__list");
const inputButton = document.querySelector(".todo-app__button");
const liElement = document
  .querySelector(".list-item-template")
  .content.querySelector(".todo-app__list-item");


             ///FUNCTIONS///
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = liElement.cloneNode(true);
    let liSpan = li.querySelector(".todo-app__list-item-delete-button");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    liSpan.textContent = "\u00d7";
    li.appendChild(liSpan);
  }

  inputBox.value = "";

  saveData();
}

function checkTask(element){
    element.target.classList.toggle("checked");
}

function deleteTask(element){
    element.target.parentElement.remove();
}

function handleCheckorDelete(e) {
  if (e.target.tagName === "LI") {
    checkTask(e);
    saveData();
  } else if (e.target.tagName === "SPAN") {
    deleteTask(e);
    saveData();
  }
}


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

               ///EVENTLISTENERS///


 listContainer.addEventListener("click", handleCheckorDelete, false);

 inputButton.addEventListener("click", addTask);


 showTask();