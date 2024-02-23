const fictionbooks = document.getElementsByClassName('fiction')
console.log(fictionbooks)
// const nonFictionbooks = document.getElementById('nonFictionSection')
// console.log(nonFictionbooks)
const nonFiction = document.getElementById("nonFictionSection");
console.log(nonFiction);
const nonFictionBooksInSection = nonFiction.getElementsByClassName("non-fiction")
// console.log(nonFictionBooksInSection[1])


const fictionbooksArr =Array.from(fictionbooks)
console.log(fictionbooksArr)
const fictionBookTitle = fictionbooksArr.map((el) => el.innerHTML)
console.log(fictionBookTitle)
