require('dotenv').config()
const conntectToDatabase = require('./database/db')
const express = require('express')

const app = express()
const PORT = process.env.PORT
const BookRoutes = require('./routes/book-routes')

//connect to the database, function is declared in db.js
conntectToDatabase()

//middleware -> express.json()..reads json, puts in req.body
app.use(express.json())

//router, so /api/books/get gets all books, /api/books/get/:id gets specific book
app.use('/api/books', BookRoutes)


app.listen(PORT, ()=>{
    console.log(`App is listening on port : ${PORT}`);
})