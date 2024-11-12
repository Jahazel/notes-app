const express = require("express");
const router = express.Router();
const { registgerUser, loginUser } = require("../controllers/authController");

//login route
router.post("/login", loginUser);

//register route
router.post("/register", registgerUser);

module.exports = router;
