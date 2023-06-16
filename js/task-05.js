
const nameInput = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

nameInput.addEventListener('input', function(event) {
  const inputValue = event.currentTarget.value;
  nameLabel.textContent = inputValue ? inputValue : 'Anonymous';
});