const valueSpan = document.getElementById('value');
let counterValue = parseInt(valueSpan.textContent);

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  valueSpan.textContent = ++counterValue;
});

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
  valueSpan.textContent = --counterValue;
});
