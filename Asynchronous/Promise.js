// function simpleCallback(success,callback){
//     console.log('Callback function calling');
//     if(success){
//         callback('the operation was successful')
//     }else{
//         callback('operation failed', null)
//     }
// }
// simpleCallback(false,(err,result) =>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("result ",result)

//     }
//     console.log("this will run anyway")
// })

// const simplePromise = new Promise((resolve, rejected)=>{
//     const success = true;
//     if(success){
//         //resolve the promise
//         resolve("the operation was successful")
//     }else{
//         // reject the promise
//         rejected("the operation was failed")
//     }
// })
// simplePromise.then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('This will run anyway')
// })

// function isEvenNumber (number, callback) {
//     if(number % 2 === 0){
//         callback(null,`the number ${number} is even`)
//     }else{
//         callback(new Error(`the number ${number} is odd`))
//     }
// }

// isEvenNumber(5, (err,result)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(result)
//     }
// }
// )

// const isEvenNumberPromise= (number) =>{
//     return new Promise((resolve, reject)=>{
//         if(number % 2 === 0){
//             resolve('This is even number')
//         }else{
//             reject('this is odd number')
//         }
//     })
// }
// isEvenNumberPromise(4).then((result)=>{
//     console.log(result)

// }).catch((err)=>{
//     console.log(err.message)
// })

function firstPromise() {
    return new Promise((resolve) => {
        resolve('First Promise')
    })
}
function secondPromise() {
    return new Promise((resolve) => {
        resolve('secondPromise')
    })
}
function thirdPromise() {
    return new Promise((resolve) => {
        resolve('third Promise')
    })
}
firstPromise().then((result1) => {
    console.log(result1)
    return secondPromise()
}).then((result2)=>{
    console.log(result2)
    return thirdPromise()
}).then((result3)=>{
    console.log(result3)
}).catch((err)=>{
    console.log(err.message)
})