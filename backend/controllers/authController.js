const User = require("../models/userModel");

//login user
const loginUser = async (req, res) => {
  res.send("login user");
};

//signup user
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
