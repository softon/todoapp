let todoForm = document.querySelector(".todo-form form");
let htmlBody = document.querySelector(".todo-table table tbody");

todoForm.addEventListener('submit', function(e){
    e.preventDefault();

    let todoTitle = todoForm.todoname.value;
    
    addTodoItem(todoTitle);

    todoForm.todoname.value = '';
});

htmlBody.addEventListener('click', function(e){
    if(e.target.getAttribute('type')=='checkbox'){
        let tr = e.target.parentNode.parentNode;
        if(e.target.checked){
            tr.classList.add('complete');
            tr.lastElementChild.innerHTML = 'Complete';
        }else{
            tr.classList.remove('complete');
            tr.lastElementChild.innerHTML = 'Pending';
        }
    }
});

htmlBody.addEventListener('dblclick', function(e){
    console.log();
    if(e.target.nodeName=='TD'){
        let tr = e.target.parentNode;
        tr.remove();
    }
});

function addTodoItem(title){
    let htmlContent = `<tr>
                            <td><input type="checkbox" name="" id=""></td>
                            <td>${title}</td>
                            <td>Pending</td>
                        </tr>`; 

    htmlBody.innerHTML += htmlContent;
}