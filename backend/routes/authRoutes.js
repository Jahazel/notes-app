const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

//login route
router.post("/login", loginUser);

//register route
router.post("/register", registerUser);

module.exports = router;
