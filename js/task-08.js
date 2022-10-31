const formRef = document.querySelector('.login-form');

function onFormSubmit(e) {
    e.preventDefault();
    const inputEmail = e.target.elements.email;
    const inputPassword = e.target.elements.password;
    if (inputEmail.value && inputPassword.value) {
        console.log({
            [inputEmail.name]: inputEmail.value,
            [inputPassword.name]: inputPassword.value,
        });
        e.currentTarget.reset();
    } else {
        alert('You should fill all fields');
    }
}

formRef.addEventListener('submit', onFormSubmit);
