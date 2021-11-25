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
        const addList = document.createElement("addList");
    
        const checkBtn = document.createElement("input");
        checkBtn.type = "checkbox";
        addList.appendChild(checkBtn);
        checkBtn.addEventListener("click",this.doneToDo)

        const toDoContent = document.createElement("toDoContent");
        toDoContent.innerText = newTodo;
        addList.appendChild(toDoContent);

        const delBtn = document.createElement("delBtn");
        delBtn.innerText="x";
        addList.appendChild(delBtn);
        delBtn.addEventListener("click",this.deleteToDo);
        
        // this.deleteToDo(event); <- target 못읽는다.
        toDoList.appendChild(addList);
    }
    deleteToDo(event){
        const addList = event.target.parentElement;
        addList.remove();
        //this.todoList = this.todoList.filter(element => element === addList);
        //console.log()
        //console.log(this.todoList);
    }
    doneToDo(event){
        const addList = event.target.parentElement;
        addList.classList.toggle("clicked");
    }
}
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const todoManager = new TodoManager();
toDoForm.addEventListener("submit",todoManager.handleToDoSubmit.bind(todoManager));
