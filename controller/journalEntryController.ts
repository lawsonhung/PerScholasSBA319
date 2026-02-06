import type { RequestHandler } from "express";
import JournalEntry from "../models/journalEntrySchema.js";
import User from "../models/userSchema.js";

const getAll: RequestHandler = async (_req, res) => {
  let allEntries = await JournalEntry.find({});

  res.json(allEntries);
};

const createOne: RequestHandler = async (req, res) => {
  let id = req.body.authorId;
  let foundUser = await User.findById(id);

  let newEntry = await JournalEntry.insertOne(req.body);
  res.json(newEntry);
};

const getOne: RequestHandler = async (req, res) => {
  let foundEntry = await JournalEntry.findById(req.params.id);

  res.json(foundEntry);
};

const patchOne: RequestHandler = async (req, res) => {
  let updatedEntry = await JournalEntry.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedEntry) return res.status(404).json({ error: "Entry not found" });

  res.json(updatedEntry);
};

const deleteOne: RequestHandler = async (req, res) => {
  let deletedEntry = await JournalEntry.findByIdAndDelete(req.params.id);

  res.json(deletedEntry);
};

export default { getAll, createOne, getOne, patchOne, deleteOne };