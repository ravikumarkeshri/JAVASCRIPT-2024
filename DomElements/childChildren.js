const parent = document.querySelector("#parent")
console.log(parent.childNodes)
// parent.childNodes.forEach(node=>console.log(node.nodeType))

// console.log(parent.children)
const convertedHtmlCollectoin = Array.from(parent.children);

convertedHtmlCollectoin.forEach(element => {
    console.log(element)
});