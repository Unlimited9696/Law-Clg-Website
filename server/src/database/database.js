const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MongoDB connection string is not defined');
        }
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected at ${connection.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
