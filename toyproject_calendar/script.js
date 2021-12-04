class Manager{
    constructor(){
        this.checkedSquare = null;
        this.storage = localStorage.getItem('taskList')?JSON.parse(localStorage.getItem('taskList')):[];
        this.date = new Date();
    }
    nextbtn = () => {
        this.date.setMonth(this.date.getMonth()+1);
        this.makeCalendar();
    }
    prevbtn = () => {
        this.date.setMonth(this.date.getMonth()-1);
        this.makeCalendar();
    }
    openModal = (date) => {
        bgModal.style.display="block";
        this.checkedSquare = date;
        const taskInDay = this.storage.find(e => e.date === this.checkedSquare);
        if(taskInDay){
            document.getElementById('taskText').innerText = taskInDay.title;
            deleteModal.style.display = 'block';
        }else{
            eventModal.style.display ="block";
        }
    }
    closeModal = () =>{
        taskInput.classList.remove('alert');
        eventModal.style.display = 'none';
        deleteModal.style.display = 'none';
        bgModal.style.display = 'none';
        taskInput.value = '';
        this.checkedSquare = null;
        this.makeCalendar();
    }
    saveEvent = () => {
        if (taskInput.value) {
            taskInput.classList.remove('alert');
            this.storage.push({
              date: this.checkedSquare,
              title: taskInput.value,
            });
            localStorage.setItem('taskList', JSON.stringify(this.storage));
            this.closeModal();
          } else {
            taskInput.classList.add('alert');
          }
    }

    deleteEvent =() =>{
        this.storage = this.storage.filter(e => e.date !== this.checkedSquare);
        localStorage.setItem('taskList', JSON.stringify(this.storage));
        this.closeModal();
    }

    makeCalendar = () =>{
        this.date.setDate(1);
        calendar.innerHTML ="";
        const day = this.date.getDate();
        const month = this.date.getMonth();
        const year = this.date.getFullYear();

        const daysInMonth = new Date(year,month+1,0).getDate();

        document.querySelector("#yearMonth").innerText = `${year}년 ${month+1}월`; 
        const prevInMonth = new Date(year, month, 0).getDate();
        const prevDays= this.date.getDay(); 
        const nextDays = new Date(year,month+1,0).getDay(); 
        const nextInMonth = 7 - nextDays - 1;

        for(let i = 1; i <= prevDays + daysInMonth ; i++){
            const taskContent = document.createElement('div');
            taskContent.classList.add('day');
            let todayMark = i-prevDays;
            const dateInMonth = `${month + 1}/${todayMark}/${year}`;
            
            if (todayMark === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
                taskContent.id = 'currentDay';
            }
            
            if(i > prevDays){
                taskContent.innerText = todayMark;
                const taskInDay = this.storage.find(e => e.date === dateInMonth);
                if (taskInDay) {
                    const makeDiv = document.createElement('li');
                    makeDiv.classList.add('taskList');
                    makeDiv.innerText = taskInDay.title;
                    taskContent.appendChild(makeDiv);
                  }
                  taskContent.addEventListener("click",this.openModal.bind(this,dateInMonth));
                }else{
                    taskContent.classList.add('prevDays');
                }
                calendar.appendChild(taskContent);
            }
    }

    init = () =>{
        this.makeCalendar();
        document.getElementById("nextBtn").addEventListener("click",this.nextbtn); 
        document.getElementById("prevBtn").addEventListener("click",this.prevbtn);
        document.getElementById('cancelBtn').addEventListener('click', this.closeModal);
        document.getElementById('saveBtn').addEventListener('click', this.saveEvent);
        document.getElementById('closeBtn').addEventListener('click', this.closeModal);
        document.getElementById('deleteBtn').addEventListener('click', this.deleteEvent);
    }
}
const calendar = document.getElementById("calendar");
const eventModal = document.getElementById("eventModal");
const bgModal = document.getElementById("bgModal");
const taskInput = document.getElementById('taskInput');
const deleteModal = document.getElementById('deleteModal');
const manager = new Manager ();
manager.init();