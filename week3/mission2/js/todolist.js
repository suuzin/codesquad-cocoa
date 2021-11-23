const addBtn = document.querySelector('#btn');
const taskInput = document.querySelector("#taskinput");
const alltodo = document.querySelector("#allList");

//const toDoList = [];

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
function registerToDo(e) {
    e.preventDefault();
    
    let addTodo = document.createElement("p");
    
    let taskContent = document.createElement("input");
    taskContent.setAttribute("type","checkbox");
    addTodo.appendChild(taskContent);

    let newText = document.createTextNode(taskInput.value);
    addTodo.appendChild(newText);
    
    let delBtn = document.createElement("span");
    let delText = document.createTextNode("x");
    delBtn.setAttribute("class","del");
    delBtn.appendChild(delText);
    addTodo.appendChild(delBtn);
    
    //toDoList.push(taskInput.value);
    alltodo.appendChild(addTodo);
    taskInput.value = "";

    delBtn.addEventListener("click",deleteToDo);
    taskContent.addEventListener("click",doneToDo);
}
addBtn.addEventListener("click",registerToDo);