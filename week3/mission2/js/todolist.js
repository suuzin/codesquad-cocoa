function register(){
    let addP = document.createElement("p"); 
    let doIt = document.querySelector("#doit");

    let input = document.createElement("input"); 
    input.setAttribute('type','checkbox');
    
    //let checkedbox = document.createElement("p");
    //checkedbox.setAttribute("class","checked");
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

    //삭제기능
    let removeBtn = document.querySelectorAll(".del");
    //x버튼 눌렀을 때 뭘 삭제 해야 하나?-노드삭제는 부모노드에서 한다.
    for(let i = 0; i < removeBtn.length; i++){ 
        removeBtn[i].addEventListener("click",function(){
            if(this.parentNode.parentNode)
                this.parentNode.parentNode.removeChild(this.parentNode); 
        });
    }

    //다시 구현해야됨
    let allP = document.querySelectorAll("p");
    for(let i = 0; i < allP.length; i++) {
       allP[i].addEventListener("click",function(ev){
        ev.target.classList.toggle("checked");
       });
    }
}
