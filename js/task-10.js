function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const elems = {
    inputRef: document.querySelector('#controls input'),
    createBtnRef: document.querySelector('[data-create]'),
    destroyBtnRef: document.querySelector('[data-destroy]'),
    divWrapperRef: document.querySelector('#boxes'),
};

function onCreateBtnClick() {
    const createdDivs = createDivs();
    elems.divWrapperRef.append(...createdDivs);
}

function onDestroyBtnClick() {
    elems.divWrapperRef.innerHTML = '';
}

elems.createBtnRef.addEventListener('click', onCreateBtnClick);
elems.destroyBtnRef.addEventListener('click', onDestroyBtnClick);

function createDivs() {
    const createdDivs = [];
    let divSize = 30;

    for (let i = 1; i <= elems.inputRef.value; i += 1) {
        const createdDiv = document.createElement('div');
        createdDiv.style.backgroundColor = getRandomHexColor();
        createdDiv.style.width = `${divSize}px`;
        createdDiv.style.height = `${divSize}px`;
        createdDivs.push(createdDiv);
        divSize += 10;
    }

    return createdDivs;
}
