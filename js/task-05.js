const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', e => (spanRef.textContent = e.target.value || 'Anonymous'));
