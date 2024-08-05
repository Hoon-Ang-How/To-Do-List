const todoList = [{
    name:'visit dentist', 
    dueDate: '2024-08-12'
},{
    name: 'attend wedding',
    dueDate: '2024-08-24'
}];

renderToDoList();

function renderToDoList(){
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoOject.dueDate;
    const{name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>    
    <button onclick="
    todoList.splice(${i},1);
    renderToDoList();
    ">Delete</button>
    
    `;
    todoListHTML += html;
}

    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value = '';

    renderToDoList();
}

