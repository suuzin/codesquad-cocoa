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

//함수 ======================
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


function doneToDo(event){
    const li = event.target.parentElement;
    li.classList.toggle("clicked")

}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    
    const check = document.createElement("input");
    check.type = "checkbox";
    li.appendChild(check);
    check.addEventListener("click",doneToDo)

    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText="x";
    li.appendChild(button);
    button.addEventListener("click",deleteToDo);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    //saveToDos();
}
toDoForm.addEventListener("submit",handleToDoSubmit);




