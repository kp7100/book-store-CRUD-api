const mongoose = require('mongoose');

require('mongoose')

const conntectToDatabase = async() =>{
    try {
        await mongoose.connect('mongodb+srv://krishanpareek996:krishanpareek9967@book-store-api.hvd0dae.mongodb.net/?appName=book-store-api')
        console.log('Mongodb is connected successfully');
    } catch (error) {
        console.log('Connection to DB failed!', error);
    }
}
module.exports = conntectToDatabase