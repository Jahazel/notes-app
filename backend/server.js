require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/user");

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
