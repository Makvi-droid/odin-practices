const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    const inputValue = document.getElementById('item').value;

    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');

    
    listItem.appendChild(span);
    listItem.appendChild(btn);
    list.appendChild(listItem);

    span.textContent = inputValue;
    btn.textContent = 'Delete';

    btn.addEventListener('click', function(){
        listItem.remove();
    })

    input.focus();
    
});