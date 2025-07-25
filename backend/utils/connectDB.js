const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo DB Connected");
    }
    catch (error) {
        console.log("Mongo DB ERRORRR", error);
        process.exit(1);
    }
}

module.exports = connectDB;