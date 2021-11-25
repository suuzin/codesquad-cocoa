class Model{
    constructor(){
        this.todoList = [];
    }
}

class View{
    constructor(Model){
        this.Model = model;
    }

    doneToDo(event){

    }

    deleteToDo(event){

    }

    init(){
        console.log("1.inddddit");
        toDoForm.addEventListener("submit",this.handleToDoSubmit.bind(this));
    }   
    
    handleToDoSubmit(event){
        event.preventDefault();
        console.log("2.init");
        const newTodo = toDoInput.value;
        console.log("newtodo",newTodo);
        toDoButton.addEventListener("click",this.paintToDo.bind(this));
        toDoInput.value ="";
    }
    
    paintToDo(newTodo){
        console.log("3.paintTodo");

        const li = document.createElement("li");
    
        const check = document.createElement("input");
        check.type = "checkbox";
        li.appendChild(check);
        //check.addEventListener("click",this.doneToDo)

        const span = document.createElement("span");
        span.innerText = newTodo;
        li.appendChild(span);

        const button = document.createElement("button");
        button.innerText="x";
        li.appendChild(button);
        //button.addEventListener("click",this.deleteToDo);
        
        toDoList.appendChild(li);

    }
}
const toDoInput = document.querySelector("#todo-form input");
const toDoButton = document.querySelector("#todo-form button")
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const model = new Model();
const view = new View();
view.init();