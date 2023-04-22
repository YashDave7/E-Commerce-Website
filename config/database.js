const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB);
        console.log(`Connected to mongoDB Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`);
    }
};

module.exports =  connectDB;