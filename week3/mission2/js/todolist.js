const addBtn = document.querySelector('#btn');
const taskInput = document.querySelector("#taskinput");
const alltodo = document.querySelector("#allList");

function doneToDo(event){
    event.target.parentNode.classList.toggle("clicked");
}
function deleteToDo(){
    let removeBtn = document.querySelectorAll(".del");
    removeBtn.forEach((el) => {
        if(this.parentNode.parentNode){
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
    });
}
function registerToDO(e) {
    e.preventDefault();
    let addtodo = document.createElement("p");
    let taskContent = document.createElement("input");
    let delBtn = document.createElement("span");
    
    taskContent.setAttribute("type","checkbox");
    delBtn.setAttribute("class","del");

    let newText = document.createTextNode(taskInput.value);
    let delText = document.createTextNode("x");

    addtodo.appendChild(taskContent);
    addtodo.appendChild(newText);
    delBtn.appendChild(delText);
    addtodo.appendChild(delBtn);
    alltodo.appendChild(addtodo);
    taskInput.value = "";

    delBtn.addEventListener("click",deleteToDo);
    taskContent.addEventListener("click",doneToDo);
}
addBtn.addEventListener("click",registerToDO);