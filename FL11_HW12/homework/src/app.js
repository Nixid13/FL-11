const rootNode = document.getElementById('root');
let listText = '';
let target = null;
let inputVal = null;
const seconds = 2000;

let todoItems = [];
const append = (parent, ...args) => {
    for (let i = 0; i < args.length; i++) {
        parent.appendChild(args[i]);
    }
}
const isChecked = (src, className, value) => {
    event.target.setAttribute('src', src);
    event.target.setAttribute('class', className);
    for (let i = 0; i < todoItems.length; i++) {
        if (event.target.parentNode.innerText === todoItems[i].description) {
            todoItems[i].isDone = value;
            break;
        }
    }
}
const check = (val) => {
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].description === val) {
            showAlert();
            return true;
        }
    }
}

const showAlert = () => {
    const alertBlock = createElement({tagName: 'div', className: 'alert'});
    const alertHeader = createElement({tagName: 'h4', innerText: 'Danger!', className: 'alert_header'});
    const alertText = createElement({
        tagName: 'p',
        innerText: `You cant add already exist item`,
        className: 'alert_text'
    });
    append(alertBlock, alertHeader, alertText);
    rootNode.appendChild(alertBlock)
    alertBlock.style.display = 'block';
    if (navigator.userAgent.match(/Chrome/gi)) {
        alertBlock.style.left = '5px';
    } else {
        alertBlock.style.right = '5px';
    }
    setTimeout(hideAlert, seconds);
}
const hideAlert = () => {
    const alertBlock = document.querySelector('.alert');
    alertBlock.style.display = 'none';
}
const addItem = (todoItem, checkBox, checkBoxClass, place) => {
    const listItem = createElement({
        tagName: 'li',
        innerText: todoItem.description,
        className: 'list_item',
        id: todoItem.id
    });
    const deleteImg = createElement({tagName: 'img', className: 'delete', attr: 'assets/img/remove-s.jpg'});
    const checkbox = createElement({tagName: 'img', className: checkBoxClass, attr: checkBox});
    if(checkbox.classList.contains('checkbox_checked')) {
        listItem.style.backgroundColor = 'grey';
    }
    place.appendChild(listItem);
    listItem.insertBefore(checkbox, listItem.firstChild);
    listItem.appendChild(deleteImg);
}

window.addEventListener('hashchange', () => {
    if (location.hash === '#addTask') {
        rootNode.removeChild(mainPage);
        rootNode.appendChild(addTaskPage);
    } else if (location.hash === '#mainPage') {
        rootNode.removeChild(addTaskPage);
        rootNode.appendChild(mainPage);
    } else if (location.hash === '#modifyTask') {
        rootNode.removeChild(mainPage);
        rootNode.appendChild(modifyTaskPage);
    } else if (location.hash === '') {
        rootNode.removeChild(modifyTaskPage);
        rootNode.appendChild(mainPage);
    }
})

const createElement = (options) => {
    let element = document.createElement(options.tagName);

    if ('className' in options) {
        element.setAttribute('class', options.className);
    }
    if ('innerText' in options) {
        element.innerText = options.innerText;
    }
    if ('attr' in options) {
        element.setAttribute('src', options.attr)
    }
    if ('id' in options) {
        element.setAttribute('data-id', options.id)
    }
    return element;
}
const mainPage = createElement({tagName: 'div', className: 'main'});
const header = createElement({tagName: 'h1', innerText: 'Simple TODO application', className: 'header'});
const addButton = createElement({tagName: 'button', innerText: 'Add new task', className: 'addBtn'});
const list = createElement({tagName: 'ul', className: 'list'});
const done = createElement({tagName: 'ul', className: 'done'});

append(mainPage, header, addButton, list, done);

const addTaskPage = createElement({tagName: 'div', className: 'addTask'});
const addHeader = createElement({tagName: 'h1', innerText: 'Add task', className: 'header'});
const input = createElement({tagName: 'input', className: 'text_input'});
const saveButton = createElement({tagName: 'button', innerText: 'Save changes', className: 'saveBtn'});
const cancelButton = createElement({tagName: 'button', innerText: 'Cancel', className: 'cancelBtn'});

append(addTaskPage, addHeader, input, saveButton, cancelButton);


const modifyTaskPage = createElement({tagName: 'div', className: 'modifyTask'});
const modifyHeader = createElement({tagName: 'h1', innerText: 'Modify task', className: 'header'});
const modifySaveButton = createElement({tagName: 'button', innerText: 'Save changes', className: 'save_modification'});
const modifyCancelButton = createElement({tagName: 'button', innerText: 'Cancel', className: 'cancel_mod'});
const modifyInput = createElement({tagName: 'input', className: 'modify_input'});

append(modifyTaskPage, modifyHeader, modifyInput, modifySaveButton, modifyCancelButton);


rootNode.addEventListener('click', (event) => {
    const eClasslist = event.target.classList;
    if (eClasslist.contains('addBtn')) {
        location.hash = '#addTask';
    } else if (eClasslist.contains('saveBtn')) {
        listText = document.querySelector('.text_input').value;
        if (!check(listText) && listText) {
            const maxNum = 9999;
            const minNum = 1000;
            const id = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum;
            const todoItem = {isDone: false, id: id, description: listText};
            todoItems.push(todoItem);
            localStorage.setItem('list', JSON.stringify(todoItems));
            location.hash = '#mainPage';
            addItem(todoItem, 'assets/img/todo-s.png', 'checkbox', list);
        }
    } else if (eClasslist.contains('delete')) {
        event.target.parentNode.remove();
        for (let i = 0; i < todoItems.length; i++) {
            if (event.target.parentNode.innerText === todoItems[i].description) {
                todoItems.splice(i, 1);
            }
        }
        localStorage.setItem('list', JSON.stringify(todoItems));
    } else if (eClasslist.contains('checkbox')) {
        isChecked('assets/img/done-s.png', 'checkbox_checked', true);
        event.target.parentNode.remove();
        done.appendChild(event.target.parentNode);
        localStorage.setItem('list', JSON.stringify(todoItems));
        event.target.parentNode.style = 'background: grey';
    } else if (eClasslist.contains('checkbox_checked')) {
        isChecked('assets/img/todo-s.png', 'checkbox', false);
        event.target.parentNode.remove();
        list.appendChild(event.target.parentNode);
        event.target.parentNode.style = 'background: white';
        localStorage.setItem('list', JSON.stringify(todoItems));

    } else if (eClasslist.contains('list_item')) {
        for (let i = 0; i < todoItems.length; i++) {
            if (+event.target.dataset.id === todoItems[i].id) {
                if (todoItems[i].isDone === true) {
                    showAlert();
                    break;
                } else {
                    listText = event.target.innerText;
                    target = event.target.dataset.id;
                    location.hash = '#modifyTask';
                }
            }
        }
    } else if (eClasslist.contains('save_modification')) {
        inputVal = document.querySelector('.modify_input').value;
        if (!check(inputVal)) {
            for (let i = 0; i < todoItems.length; i++) {
                if (todoItems[i].id === +target) {
                    todoItems[i].description = inputVal;
                    location.href = '';
                    break;
                }
            }
        }
        localStorage.setItem('list', JSON.stringify(todoItems));
    } else if (eClasslist.contains('cancelBtn')) {
        location.hash = '#mainPage';
    } else if (eClasslist.contains('cancel_mod')) {
        location.hash = '';
    }
})

const loadItems = () => {
    window.location.hash = '';
    if (localStorage.length) {
        const storage = localStorage.getItem('list');
        todoItems = JSON.parse(storage);
        for (let i = 0; i < todoItems.length; i++) {
            const checkBox = todoItems[i].isDone === true ? 'assets/img/done-s.png' : 'assets/img/todo-s.png';
            const checkBoxClass = todoItems[i].isDone === true ? 'checkbox_checked' : 'checkbox';
            if (checkBoxClass === 'checkbox_checked') {
                addItem(todoItems[i], checkBox, checkBoxClass, done)
            } else {
                addItem(todoItems[i], checkBox, checkBoxClass, list)
            }
        }
    }
}
window.addEventListener('load', loadItems);

rootNode.appendChild(mainPage);
