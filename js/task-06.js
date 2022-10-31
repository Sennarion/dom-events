const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', e => {
    inputRef.removeAttribute('class');
    if (Number(inputRef.dataset.length) === e.target.value.length) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');
    }
});
