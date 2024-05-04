const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("Connected to DB")
    }catch(err){
        console.log("Error: ", err)
    }
}

module.exports = connectDB;