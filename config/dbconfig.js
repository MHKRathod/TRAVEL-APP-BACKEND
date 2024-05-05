const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://Localhost:27017/database');
        console.log('MongoDB connected successfully');
    }
    catch(error){
       console.log("connection failed to mongodb", error)
    }
}

module.exports = connectDB;