import type { RequestHandler } from "express";
import JournalEntry from "../models/journalEntrySchema.js";

const getAll: RequestHandler = async (_req, res) => {
  let allEntries = await JournalEntry.find({});

  res.json(allEntries);
};

export default { getAll };