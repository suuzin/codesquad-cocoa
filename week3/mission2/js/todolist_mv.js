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
        toDoButton.addEventListener("click",this.paintToDo.bind(this));
        toDoInput.value ="";
    }
    
    paintToDo(newTodo){
        console.log("3.paintTodo");

        this.addTodo = document.createElement("li");
    
        this.checkButton = document.createElement("input");
        this.checkButton.type = "checkbox";
        this.addTodo.appendChild(this.checkButton);
        this.checkButton.addEventListener("click",this.deleteToDo.bind(this));
        
        this.addContent = document.createElement("span");

        this.addContent.innerText = toDoInput.value;
        this.addTodo.appendChild(this.addContent);

        this.delBtn = document.createElement("button");
        this.delBtn.innerText="x";
        this.addTodo.appendChild(this.delBtn);
        this.checkButtonbutton.addEventListener("click",this.doneToDo);
        
        toDoList.appendChild(this.addTodo);
    }
}
const toDoInput = document.querySelector("#todo-form input");
const toDoButton = document.querySelector("#todo-form button")
const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");

const model = new Model();
const view = new View();
view.init();