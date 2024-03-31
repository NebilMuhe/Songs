const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose.connect(uri);
  console.log("Connected to MongoDB: " + uri);
};

module.exports = connectDB;