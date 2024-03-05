// async function waitAndRun(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`value is ${value}`)
//         }, 2000)
//     })
// }

// const getProcessedValue = async () => {
//     const result = await waitAndRun(2)
//     console.log(result);
// }
// getProcessedValue()

// const getName = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Name : Ravi")
//         }, 2000)
//     })
// }
// const getAge = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Age : 30")
//         }, 3000)
//     })
// }
// async function getUserDetails() {
//     const result = await Promise.all([getName(), getAge()])
//     console.log("Result: ", result)
// }
// getUserDetails()

async function randomOutCome() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 5) {
            resolve("successful")
        } else {
            reject("Failed")
        }
    })
}
const handleOutCome = async () =>{
    try {
        const result = await randomOutCome();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
handleOutCome()