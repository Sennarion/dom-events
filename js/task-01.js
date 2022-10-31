const liElems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liElems.length}`);

for (const el of liElems) {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
}
