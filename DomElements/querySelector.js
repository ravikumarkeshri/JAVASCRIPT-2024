// Get the first product card 
// const firstProductCard = document.querySelector(".product-card");
// console.log(firstProductCard);

// //get the highest rating
// const highestRating = document.querySelector("[data-rating='4.5']")
// console.log(highestRating)

// const laptop  = document.querySelector("[data-category = 'laptop']")
// console.log(laptop)


// const dashboard = document.querySelector("#dashboard") 
// console.log(dashboard)

//---- QUERY SELECTOR ALL-----//

const productCards = document.querySelectorAll(".product-card")
console.log(productCards)

const productNames = document.querySelectorAll(".product-name")
// productNames.forEach((item)=>{console.log(item)})

const laptopPrices  = document.querySelectorAll("[data-category='laptop'] .product-price")
laptopPrices.forEach((item) =>{console.log(item.innerHTML)})

const smartPhoneRating = document.querySelectorAll("[data-category = 'smartphone'] .product-rating")
smartPhoneRating.forEach((item)=>{console.log(item.innerHTML)})