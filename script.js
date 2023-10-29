const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// add item
const addItem = (e) => {
    e.preventDefault();
    const newItem = itemInput.value;

    // vaidate input
    if (newItem === '') {
        alert('Please add item')
        return;
    }

    // create item list
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value = '';
}

const createButton = (classes) => {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

const createIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// removing item
const removeItem = (e) => {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

const clearItem = () => {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}
// Event Listener
itemForm.addEventListener('submit', addItem);
itemForm.addEventListener('click', removeItem);
itemForm.addEventListener('click', clearItem);