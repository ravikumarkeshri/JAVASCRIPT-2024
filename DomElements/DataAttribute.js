const userCard = document.getElementById("userCard")
// console.l0g(userCard)
const userId = userCard.getAttribute("data-user-id")
// console.log(userId)
const userRole = userCard.getAttribute("data-user-role")
// console.log(userRole)

userCard.setAttribute('data-user-role','super-admin')
userCard.setAttribute('data-user-position','malik')
// console.log(userCard.getAttribute('data-user-position'))


const userId2 = userCard.dataset.userRole;
console.log(userId2)

