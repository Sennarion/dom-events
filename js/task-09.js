function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

function onBtnClick() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    spanRef.textContent = randomColor;
}

btnRef.addEventListener('click', onBtnClick);
