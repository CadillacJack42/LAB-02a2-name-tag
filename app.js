const greeting = document.getElementById('greeting-field')
const nameField = document.getElementById('name-field')
const chosenName = document.getElementById('chosen-name')
const hello = document.getElementById('hello')

greeting.addEventListener('change', (event) => {
    hello.textContent = event.target.value;
});

nameField.addEventListener('change', (event) => {
    chosenName.textContent = event.target.value;
});