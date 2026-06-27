const express = require("express");
const cors = require("cors");
const router = require("./routes/auth");
const posts = require("./routes/post");
const { default: dbConnection } = require("./config");
const server = express();

require("dotenv").config();
dbConnection();
server.use(cors());

// Middleware
server.use(cors());
server.use(express.json());

// Routes
server.use("/auth", router);
server.use(posts);

// Start the server
server.listen(3000, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
