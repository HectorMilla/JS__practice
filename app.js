// define UI Vars

const form= document.querySelector('#task-form')
const taskList= document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const filter = document.querySelector('#filter')
const taskInput= document.querySelector('#task')


// Load all event listeners

loadEventListeners()


// Load all event listeners
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear task event
  if (clearBtn){
    clearBtn.addEventListener('click', clearTasks)
  }
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)
}

// Add task

function addTask(e){
  if(taskInput.value === '') {
    alert('add task')
  }

  // create li element
  
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))

  // create new link element
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  // add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>'
  li.appendChild(link)
  // append to task list
  taskList.appendChild(li)

  // Store in LS\
  storeTaskInLocalStorage(taskInput.value)


  // Clear input
  taskInput.value = ''
  
  e.preventDefault()
}

// Store task

function storeTaskInLocalStorage(task){
  let tasks;
  if (localStorage.getItem('tasks') === null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)
  console.log(tasks);
  localStorage.setItem('tasks',JSON.stringify(tasks))

}

// Remove Task

function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
      listItem = e.target.parentElement.parentElement
      listItem.remove()
    }
   

  }
  
}

// Clear Tasks
function clearTasks() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block'
      } else {
        task.style.display = 'none'
      }
    }
  )
}