function register(){
    let addP = document.createElement("p"); 
    let doIt = document.querySelector("#doit");

    let input = document.createElement("input"); 
    input.setAttribute('type','checkbox');
    
    addP.appendChild(input);

    let newText = document.createTextNode(doIt.value); 
    addP.appendChild(newText);

    let delBtn = document.createElement("span");
    let delText = document.createTextNode("X");
    delBtn.setAttribute("class","del"); 
    delBtn.appendChild(delText); 
    addP.appendChild(delBtn);
    
    let allList = document.querySelector("#allList");
    allList.appendChild(addP); 
    doIt.value =""; 

    let removeBtn = document.querySelectorAll(".del");
    for(let i = 0; i < removeBtn.length; i++){ 
        removeBtn[i].addEventListener("click",function(){ 
            if(this.parentNode.parentNode) 
                this.parentNode.parentNode.removeChild(this.parentNode); 
        });
    }

    input.addEventListener("click",function(ev){
        ev.target.parentNode.classList.toggle('clicked');
    });
}