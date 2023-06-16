const counterValueElement = document.getElementById('value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function updateCounterValue() {
    counterValueElement.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    updateCounterValue();
}

function decrement() {
    counterValue -= 1;
    updateCounterValue();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);