class TodoManager{
    constructor(){
        this.todoList = [];
    }
    handleToDoSubmit(event){
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value ="";
        this.todoList.push(newTodo);
        this.paintToDo(newTodo);
    }
    paintToDo(newTodo){
        const li = document.createElement("li");
    
        const check = document.createElement("input");
        check.type = "checkbox";
        li.appendChild(check);
        check.addEventListener("click",this.doneToDo)

        const span = document.createElement("span");
        span.innerText = newTodo;
        li.appendChild(span);

        const button = document.createElement("button");
        button.innerText="x";
        li.appendChild(button);
        button.addEventListener("click",this.deleteToDo);
        
        // this.deleteToDo(event); <- target 못읽는다.
        toDoList.appendChild(li);
    }
    deleteToDo(event){
        const li = event.target.parentElement;
        li.remove();
        //this.todoList = this.todoList.filter(element => element === li);
        //console.log()
        //console.log(this.todoList);
    }
    doneToDo(event){
        const li = event.target.parentElement;
        li.classList.toggle("clicked");
    }
}
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const todoManager = new TodoManager();
toDoForm.addEventListener("submit",todoManager.handleToDoSubmit.bind(todoManager));
