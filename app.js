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

  // Clear input
  taskInput.value = ''
  
  e.preventDefault()
}

// Remove Task

function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
      listItem = e.target.parentElement.parentElement
      listItem.remove()
    }
   

  }
  console.log(e.target.className)
}