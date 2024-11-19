const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: "1d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // if missing fields
  if (!email || !password) {
    return res.status(400).json({ error: "Please provide all fields" });
  }

  try {
    //if user exisists
    const newUser = await User.findOne({ email });
    if (!newUser) {
      return res.status(400).json({ error: "User not found" });
    }

    //compare password with hashed password in database
    const isMatch = await newUser.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    //create token
    const token = createToken(newUser._id);
    res.status(201).json({ email, token });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
};

//regsiter user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  // if missing fields
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please provide all fields" });
  }

  //if user exists
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    //create new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    //create token
    const token = createToken(newUser._id);

    res.status(201).json({ name, email, token });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
