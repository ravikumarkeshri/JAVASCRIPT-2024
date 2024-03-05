// Step1 select a list item using data attribute

const selectedItemEl = document.querySelector('[data-item ="fruit"] ');
console.log(selectedItemEl)

const parentListEl = selectedItemEl.parentNode
console.log(parentListEl);

const grandParentEl = parentListEl.parentNode;
console.log(grandParentEl)