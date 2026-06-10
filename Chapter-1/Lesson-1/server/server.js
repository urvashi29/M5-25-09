const express = require("express");
const dbConnection = require("./config/config");
const usersRoute = require("./routes/userroutes");
const cors = require("cors");

const app = express();
require("dotenv").config();

dbConnection();

app.use(cors()); //cross origin resource sharing
app.use(express.json());
app.use(usersRoute);

app.listen(5000, () => {
  console.log("Server started");
});

// API: GET http://localhost:5000/api/users?page=1&limit=10
