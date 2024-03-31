const express = require("express");
const app = express();
const PORT = 4600;

app.use(express.json());

// const books = [
//     { id: "1", book: "book1", author: "author1" },
//     { id: "2", book: "book2", author: "author2" },
//     { id: "3", book: "book3", author: "author3" },
// ]

// app.get('/', (req, res) => {
//     res.json({
//         status: 'success',
//         message: "this is book api"
//     })
// })
// app.get('/books', (req, res) => {
//     res.json({
//         status: 'success',
//         message: 'books fetched successfully',
//         data: books
//     })
// })
// app.get('/books/:id', (req, res) => {
//     const id = req.params.id;
//     const bookFound = books.find((book) => book.id === id)
//     console.log(bookFound)
//     if (!bookFound) {
//         res.json({
//             status: "failed",
//             message: `book with id ${id} not found`,

//         })
//     }

//     res.json({
//         status: 'success',
//         message: "Book fetched Successfully",
//         book: id,
//         fetched: bookFound.author

//     })
// })
// app.post('/books',(req,res)=>{
//     console.log(req.body);
//     const newBook = req.body;
//     books.push(newBook)
//     try {
//     res.json({
//         status: "success",
//         message:"book book added successfully",
//         book:books
//     })
//    } catch (error) {
//         res.json({
//             status:"failed",
//             message:"Book was not added",
//             errro:error
//         })
//    }
// })
app.use((req, res, next) => {
    console.log("APP Level Middleware")
})


app.post('/book', (req, res) => {
    console.log(req.body);
    res.json({
        message:"Built in middleware demo"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})