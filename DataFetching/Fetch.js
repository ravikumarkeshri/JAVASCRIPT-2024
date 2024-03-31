// const fetchData = () => {
//     fetch(url).then((response) => {
//         return response.json();

//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// const fetchData2 = async () => {
//     try {
//         const result = await fetch(url)
//         return result.json()
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchData2().then((response)=>{
//     console.log(response)
// })

const fetchData3 = () => {
    axios.get(url)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
}
// fetchData3()

const fetchData4 = async () => {
    try {
        // const result = await axios.get(url)
        // console.log(result.data)

        const {data}  = await axios.get(url)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}