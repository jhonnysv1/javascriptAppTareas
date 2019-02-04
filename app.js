document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
    
    var titulo = document.getElementById('title').value;
    var description = document.getElementById('description').value;


    const task = {
        title: titulo,
        description: description
    }

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        var tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTask();

    document.getElementById('formTask').reset();


    e.preventDefault();
}


function getTask() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));

    let taskview = document.getElementById('tasks');
    taskview.innerHTML = '';

    tasks.forEach(element => {
        taskview.innerHTML += 
        `<div class="card mb-3">
            <div class="card-body">
                <p>${element.title} - ${element.description}</p>
                <a class="btn btn-danger" onclick="deletetask('${element.title}')">Delete</a>
            </div> 
        </div>`
    });

}


function deletetask(title){
    
    var tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((element,index,array) =>{
        
        if (element.title == title) {
            array.splice(index,1);
        }
    });


    localStorage.setItem('tasks', JSON.stringify(tasks));

    getTask();
}

