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
    return res.status(400).json({ message: "Please provide all fiels" });
  }

  try {
    //if user exisists
    const newUser = await User.findOne({ email });
    if (!newUser) {
      return res.status(400).json({ message: "User not found" });
    }

    //compare password with hashed password in database
    const isMatch = await newUser.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    //create token
    const token = createToken(newUser._id);
    res.status(201).json({ email, token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(400).json({ message: "Error logging in", error: error.message });
  }
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

module.exports = {
  registgerUser,
  loginUser,
};
