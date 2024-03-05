// function myCallBack() {
//     console.log("hello workd")
// }
// function myMessage(CallBack) {
//     console.log("Inside mtMessage")
//     CallBack
// }
// myMessage(myCallBack)


// function A() {
//     console.log("hello from A")
// }
// function B(callback) {
//     console.log("Hello From B")
//     callback()
// }
// B(A)

// function logMessage(callback){
//     const result = callback();
//     // console.log(callback());
//     // console.log(result)

// }
// logMessage(()=>{
//     return "HelloBuddy"
// })
// function logMessage(callback){
//     const result = callback();
//     return result;

// }
// const newResult = logMessage(()=>{
//     return "HelloBuddy"
// })
// console.log(newResult)

const logMessageCallbacks = (firstName, lastName) => {
    return `Hello ${firstName} ${lastName} How are you?`;
}
const logMessageHOF = (callback) =>{
    const result = callback("Ravi","Kumar");
    console.log(result)
}
logMessageHOF(logMessageCallbacks);

const calculateSumHOF = (a,b,callback) =>{
    const result = a+b;
    callback(result);
}
calculateSumHOF(2,3,(result) =>{
    console.log(result)
})
