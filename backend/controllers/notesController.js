const express = require("express");
const router = express.Router();
const Note = require("../models/notesModel");

const createNote = async (req, res) => {
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    return res.status(400).json({ error: "Please provide all fields" });
  }

  try {
    //create new note
    const newNote = new Note({
      title,
      content,
      userId,
    });

    //save note to database
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Error creating new note" });
  }
};

module.exports = { createNote };
