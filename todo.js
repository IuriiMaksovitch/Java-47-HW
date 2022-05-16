const item = document.getElementById('item');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

function addFunc() {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        const buttonDel = document.createElement('button');
        buttonDel.append(document.createTextNode('X'));
        buttonDel.classList.add('del');
        buttonDel.onclick = function() {
            this.parentElement.remove();
        };
        li.append(document.createTextNode(text), buttonDel);
        todoList.append(li);
    }
    item.value = '';
    item.focus();
}

addItem.onclick = addFunc;

item.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addFunc();
    }
})
