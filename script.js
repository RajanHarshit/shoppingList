const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

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
        if (confirm('Are you sure ?')) {
            e.target.parentElement.parentElement.remove();
            checkUI();
        }
    }
}

const clearItem = () => {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

// Clear UI state
const checkUI = () => {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none'
        itemFilter.style.display = 'none'
    } else {
        clearBtn.style.display = 'block'
        itemFilter.style.display = 'block'
    }
}
// Event Listener
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItem);