const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');

// LOAD ALL EVENT LISTENERS
LoadEventListeners()


// LOAD ALL EVENT LISTENERS
function LoadEventListeners(){

    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask)

    //clear task
    clearBtn.addEventListener('click', clearTask);

    //filter task
    filter.addEventListener('keyup', filterTask);
}


//get tasks from ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
         // create li element
         const li = document.createElement('li');

         // add class
         li.className = 'list-group-item d-flex align-items-center';
 
         // create text node and append to li 
         li.appendChild(document.createTextNode(task));
 
         // create i element
         const i = document.createElement('i');
 
         // add class
         i.className = 'fa fa-close text-danger mr-auto delete-item';
 
         //append the i to li
         li.appendChild(i);
 
         // append li to ul
         taskList.appendChild(li);
    })
}



// Add task 
function addTask(e){
    if(taskInput.value === ''){
        alert('To add a task, first enter the task.')
    } else {
        // create li element
        const li = document.createElement('li');

        // add class
        li.className = 'list-group-item d-flex align-items-center';

        // create text node and append to li 
        li.appendChild(document.createTextNode(taskInput.value));

        // create i element
        const i = document.createElement('i');

        // add class
        i.className = 'fa fa-close text-danger mr-auto delete-item';

        //append the i to li
        li.appendChild(i);

        // append li to ul
        taskList.appendChild(li);

        //store in LS
        storeTaskInLocalStorage(taskInput.value);

        // clear input
        taskInput.value = '';

        e.preventDefault();
    }
}


// store task
function storeTaskInLocalStorage(task){
    // console.log(task);

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}




// remove task
function removeTask(e){
    if(e.target.classList.contains('delete-item')){
    if(confirm('Are you sure to delete the task?')){
        e.target.parentElement.remove();

        //remove from ls
        removeTaskFromLocalStorage(e.target.parentElement);
    }
    }
}



//remove from ls
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}






//clear task
function clearTask(){
    taskList.innerHTML = '';

    //clear from ls
    clearTasksFromLocalStorage();
}


//clear tasks from ls
function clearTasksFromLocalStorage(){
    localStorage.clear();
}





//filter task
function filterTask(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.list-group-item').forEach(function(task){
        //console.log(task);
        const item = task.textContent;
        //console.log(item);

        if(item.toLowerCase().indexOf(text) != -1){
            task.classList.add("d-flex");
        } else {
            task.classList.remove("d-flex");
            task.style.display ='none';
        }
    });
}


