const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      userCreateIndex: true
    });

    console.log("mongo db connected ......");
  } catch (err) {
    console.log(err.message);

    // exit with fail message
    process.exit(1);
  }
};

module.exports = connectDB;
