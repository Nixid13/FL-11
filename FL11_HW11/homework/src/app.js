window.onload = () => {
    const inputText = document.querySelector('.input_text');
    const addBtn = document.querySelector('.add');
    const todoItems = document.querySelector('.todo_items');
    const alert = document.querySelector('.alert');
    const LIST_LENGTH = 10;
    let selected = null;

    const createElement = (options) => {
        let element = document.createElement(options.tagName);

        if ('className' in options) {
            element.setAttribute('class', options.className);
        }
        if ('innerText' in options) {
            element.innerText = options.innerText;
        }
        if ('attr' in options) {
            element.setAttribute('draggable', options.attr)
        }
        return element;
    }

    const isBefore = (el1, el2) => {
        if (el2.parentNode === el1.parentNode) {
            for (let cur = el1.previousSibling; cur; cur = cur.previousSibling) {
                if (cur === el2) {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    const disableEnableBtn = () => {
        if (inputText.value.length > 0) {
            addBtn.removeAttribute('disabled')
        } else {
            addBtn.setAttribute('disabled', 'disabled');
        }
    }

    inputText.addEventListener('input', disableEnableBtn);

    addBtn.addEventListener('click', () => {
        if (todoItems.childElementCount <= LIST_LENGTH) {
            const li = createElement({tagName: 'li', className: 'item', attr: 'true'});
            const task = createElement({tagName: 'div', className: 'item_task'});
            const save = createElement({tagName: 'div', className: 'save_input'});
            const p = createElement({tagName: 'p', innerText: inputText.value});
            const edit = createElement({tagName: 'i', className: 'material-icons edit_task', innerText: 'edit'});
            const deleteItem = createElement({tagName: 'i', className: 'material-icons delete', innerText: 'delete'});
            const saveBtn = createElement({tagName: 'i', className: 'material-icons save', innerText: 'save'});
            const taskChange = createElement({tagName: 'input'});
            const checkbox = createElement({
                tagName: 'i',
                className: 'material-icons checkbox',
                innerText: 'check_box_outline_blank'
            });

            todoItems.appendChild(li);
            li.appendChild(task);
            li.appendChild(save);
            task.appendChild(checkbox);
            task.appendChild(p);
            task.appendChild(edit);
            task.appendChild(deleteItem);
            save.appendChild(taskChange);
            save.appendChild(saveBtn);

            inputText.value = '';

            disableEnableBtn();
        }
        if (todoItems.childElementCount === LIST_LENGTH) {
            alert.style = 'opacity: 1';
            disableEnableBtn();
            inputText.setAttribute('disabled', 'disabled');
        }
    })

    todoItems.addEventListener('click', (event) => {
        const evTarget = event.target;
        const parent = event.target.parentNode;
        if (evTarget.textContent === 'delete') {
            parent.parentNode.remove();
            alert.style = 'opacity: 0';
            inputText.removeAttribute('disabled');
        } else if (evTarget.textContent === 'edit') {
            parent.style = 'display: none';
            parent.nextElementSibling.style = 'display: flex';
        } else if (evTarget.classList.contains('save')) {
            let p = parent.previousElementSibling.querySelector('p');
            p.innerText = evTarget.previousElementSibling.value;
            parent.style = 'display: none';
            parent.previousElementSibling.style = 'display: flex';
        } else if (evTarget.textContent === 'check_box_outline_blank') {
            evTarget.innerText = 'check_box';
        }
    })

    todoItems.addEventListener('dragstart', (event) => {
        event.dataTransfer.effectAllowed = 'move';
        selected = event.target;
    })

    todoItems.addEventListener('dragenter', (event) => {
        let evTarget = event.target;
        if (evTarget.nodeName === 'DIV') {
            evTarget = evTarget.parentNode;
        } else if (evTarget.nodeName === 'I' || evTarget.nodeName === 'P') {
            evTarget = evTarget.parentNode.parentNode;
        }
        if (isBefore(selected, evTarget)) {
            evTarget.parentNode.insertBefore(selected, evTarget)
        } else {
            evTarget.parentNode.insertBefore(selected, evTarget.nextSibling);
        }
    });
}
