const getToggle = document.querySelector('#main-list');
const getMenu = document.querySelector('#dropdown-menu');
const getCount = document.querySelector('#count');

function showMenu(){
    let timer;
    getToggle.addEventListener('mouseenter',() =>{
        timer = setTimeout(() =>getMenu.style.display = "block",1000);
    })
    getToggle.addEventListener('mouseleave',()=>{
        clearTimeout(timer)
    });
}
showMenu();

// function showCount(){
//     getMenu.addEventListener('mouseleave',(event)=>{
//         console.log(event.target.textContent);
//     });
// }
