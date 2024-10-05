const todoname = document.querySelector('.todoinput');
const todolist = [];

function todoinput() {
    const name = todoname.value;
    if (name !== '') {
        // Add the item to the list with a "checked" property
        todolist.push({ name: name, checked: false });
        todoname.value = '';  // Clear input field
        renderTodoList();     // Update the list
    }
}

function renderTodoList() {
    let todoyo = '';
    todolist.forEach((item, index) => {
        // Create the HTML for each item, applying the "checked" class if the item is checked
        const checkedClass = item.checked ? 'checked' : '';
        const html = `
        <p>
          <span class="${checkedClass}" onclick="toggleChecked(${index})">${item.name}</span>
          <button class="remove-btn" onclick="removeItem(${index}, this)">Remove</button>
        </p>`;
        todoyo += html;
    });
    document.querySelector(".to-dolist").innerHTML = todoyo;
}

function toggleChecked(index) {
    // Toggle the checked state of the selected item
    todolist[index].checked = !todolist[index].checked;
    renderTodoList();  // Re-render the list with updated styles
}

function removeItem(index, btn) {
    // Remove the item from the list
    todolist.splice(index, 1);
    renderTodoList();  // Refresh the list after removing the item
}



