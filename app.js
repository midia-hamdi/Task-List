const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');

// LOAD ALL EVENT LISTENERS
LoadEventListeners()

// LOAD ALL EVENT LISTENERS
function LoadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add task 
function addTask(e){
    if(taskInput.value === ''){
        alert('To add a task, first enter the task.')
    } else {
        // create li element
    }
}