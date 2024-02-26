// Accessing Parent Elements
const parentEl = document.getElementById("parent")
// console.log(parentEl.parentNode)
//Accessing the grandParent Element
const grandParentEl = document.getElementById("grandParent")
// console.log(grandParentEl)

const firstChildEl = parentEl.firstChild
const lastChildEl = parentEl.lastChild
console.log(firstChildEl, lastChildEl)
console.log(parentEl.firstElementChild)
console.log(parentEl.lastElementChild)
