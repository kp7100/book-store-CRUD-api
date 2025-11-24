  const express = require('express')
  const router = express.Router()
  const {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook} = require('../controllers/book-controller')
  //router.get('path', controller)... controller is the (req, res) =>{}, will put this inside the controllers file

  router.get('/get', getAllBooks)
  router.get('/get/:id', getSingleBookById)
  router.post('/add', addNewBook)
  router.post('/update/:id', updateBook)
  router.delete('/delete/:id', deleteBook)

  //add the exported router to server.js app.use()
  module.exports = router