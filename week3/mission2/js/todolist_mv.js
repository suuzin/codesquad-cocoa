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
        console.log("done")
    }

    deleteToDo(event){
        console.log("delete");

    }

    init(){
        console.log("1.inddddit");
        toDoForm.addEventListener("submit",this.handleToDoSubmit.bind(this));
    }   
    
    handleToDoSubmit(event){
        event.preventDefault();
        console.log("2.init");

        const newTodo = toDoInput.value;
        // console.log("newtodo",newTodo);
        this.paintToDo(newTodo);
        toDoInput.value ="";
    }
    
    paintToDo(newTodo){
        console.log("3.paintTodo");

        const addTodo = document.createElement("li");
    
        const checkButton = document.createElement("input");
        checkButton.type = "checkbox";
        addTodo.appendChild(checkButton);
        checkButton.addEventListener("click",this.deleteToDo.bind(this));
        
        const addContent = document.createElement("span");
        addContent.innerText = newTodo
        addTodo.appendChild(addContent);

        const delBtn = document.createElement("button");
        delBtn.innerText="x";
        addTodo.appendChild(delBtn);
        checkButton.addEventListener("click",this.doneToDo);
        
        toDoList.appendChild(addTodo);
    }
}
const toDoInput = document.querySelector("#todo-form input");
const toDoButton = document.querySelector("#todo-form button")
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const model = new Model();
const view = new View();
view.init();