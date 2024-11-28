const express = require("express");

const router = express.Router();
const { createNote } = require("../controllers/notesController");

//create a note
router.post("/create", createNote);

module.exports = router;
