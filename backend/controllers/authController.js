const User = require("../models/userModel");

//login user
const loginUser = async (req, res) => {
  res.send("login user");
};

//regsiter user
const registgerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  // if missing fields
  if (!email || !password || !name) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  //if user exists
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    //create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
};

module.exports = {
  registgerUser,
  loginUser,
};
