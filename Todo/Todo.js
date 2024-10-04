let form = document.getElementById('form');

// Get todo from local storage
let current_todos = localStorage.getItem('todo_list') || '';
let todo_list = document.getElementById('todo_list');

todo_list.innerHTML = current_todos;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get new todo value from input field
    let new_todo_item = document.getElementById('todo').value;

    if (new_todo_item === '') {
        alert('Please enter a valid todo task...');
    } else {
        // Create new li element
        let new_li = document.createElement('li');
        new_li.innerHTML = `<span>${new_todo_item}</span> <button type="button" class="delete_btn">X</button>`;

        // Append li to ul tag
        todo_list.append(new_li);

        // Save list in local storage
        add_todo();
        li_events();
    }
});

function li_events() {
    // Get all li elements and add event listeners
    let lis = document.querySelectorAll('li');
    lis.forEach((list) => {
        list.querySelector('.delete_btn').addEventListener('click', function () {
            list.remove();
            add_todo();
        });
    });
}

function add_todo() {
    let list = todo_list.innerHTML;
    localStorage.setItem('todo_list', list);
}

// Initial call to set up event listeners for existing todos
li_events();
