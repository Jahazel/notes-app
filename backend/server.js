const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
require("dotenv").config();

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/user", userRoutes);

//connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        "Connected to mongodb and server running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.error("MongoDB connection error or server error:", error));
