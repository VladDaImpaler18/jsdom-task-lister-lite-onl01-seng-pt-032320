document.addEventListener("DOMContentLoaded", () => {
  
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    if(inputText.value != ""){
      createTask();
      e.target.reset();
    }else{ console.log("Task description cannot be blank.") }
  });

  document.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON"){
      e.target.parentElement.remove()
    }

  });
});

const inputText = document.getElementById("new-task-description");
const taskUl = document.getElementById("tasks");


function createTask() {
  let node = document.createElement("li");
  let textnode = document.createTextNode(inputText.value);
  let button = document.createElement("button");
      button.innerHTML = "X";

  node.appendChild(textnode);
  node.appendChild(button);
  taskUl.appendChild(node);
}
