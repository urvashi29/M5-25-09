const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    // Connect to your MongoDB database (replace with your database URL)
    mongoose.connect("mongodb://localhost:27017/todo");

    const database = mongoose.connection;
    database.on("err", (err) => {
      console.log(err);
    });

    database.once("connected", () => {
      console.log("Database connected");
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnection;
