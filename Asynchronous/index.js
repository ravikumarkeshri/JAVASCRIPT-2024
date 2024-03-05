console.log("Hello Programming")

const intervals = setInterval(()=>{
    console.log("Printing after every 2 sec")
},2000)

setTimeout(()=>{
    clearInterval(intervals)
},11000)