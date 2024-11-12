const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);

//connect to mongodb
connectDB();

//start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT);
});
