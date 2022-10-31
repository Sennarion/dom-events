const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createLiEl = el => {
  const LiEl = document.createElement('li');
  LiEl.classList.add('item');
  LiEl.textContent = el;
  return LiEl;
};

const createUlMarkup = ingredients.map(createLiEl);

document.querySelector('#ingredients').append(...createUlMarkup);
