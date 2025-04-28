const form = document.querySelector('#todo-form');
const taskTitleInput = document.querySelector('#task-tilte-input');
const todoListUl = document.querySelector('#todo-list');

let tasks = [] // [{title: 'Tarefa 1', done: false, ...}]

function renderTasksOnHTML(taskTitle, done = false){
    const li = document.createElement('li');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('change', (event) => {
        const liToToggle = event.target.parentElement;
        const spanToToggle = liToToggle.querySelector('span');
        const done = event.target.checked;
        if(done){
            spanToToggle.style.textDecoration = 'line-through';
        }else{
            spanToToggle.style.textDecoration = 'none';
        }

        tasks = tasks.map(t => {
            if(t.title === spanToToggle.textContent){
                return {
                    title: t.title,
                    done: !t.done,
                }
            }

            return t
        })

        localStorage.setItem('tasks', JSON.stringify(tasks));       
    })
    input.checked = done;


    const span = document.createElement('span');
    span.textContent = taskTitle;
    if(done){
        span.style.textDecoration = 'line-through';
    }

    const button = document.createElement('button');
    button.textContent = 'Remover';
    button.addEventListener('click', (event) => {
        const liToRemove = event.target.parentElement;
        const titleToRemove = liToRemove.querySelector('span').textContent;
        
        tasks = tasks.filter(t => t.title !== titleToRemove);
        
        todoListUl.removeChild(liToRemove);    

        localStorage.setItem('tasks', JSON.stringify(tasks));
    })

    //Encaminha a tarefa para o HTML
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
     
    todoListUl.appendChild(li)
}

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem('tasks');
    if(!tasksOnLocalStorage) return;
    tasks = JSON.parse(tasksOnLocalStorage);
    tasks.forEach(t => {
        renderTasksOnHTML(t.title, t.done);
    })
}
    

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o carregamento da página ao submeter o formulário
    
    const taskTitle = taskTitleInput.value;
    if(taskTitle.length < 3) {
       alert("Sua tarefa precisa ter, pelo menos, 3 caracteres.");
       return;
    }

    // Adiciona a nova tarefa ao array de tasks
    tasks.push({
        title: taskTitle,
        done: false,
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));   

    // Adiciona a nova tarefa no HTML
    renderTasksOnHTML(taskTitle);
   
    // Limpa o campo de entrada de tarefa
    taskTitleInput.value = '';
})
