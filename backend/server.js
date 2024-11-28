const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const notesRoutes = require("./routes/notesRoutes");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

//middleware
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

//connect to mongodb
connectDB();

//start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port", process.env.PORT);
});
